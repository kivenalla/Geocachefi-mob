# Deployment Guide — UpCloud

This guide covers deploying Geocache.fi (frontend + NestJS backend + PostgreSQL) on an UpCloud cloud server.

## Prerequisites

- An UpCloud account
- A domain name (optional but recommended for HTTPS)
- SSH key pair for server access

## 1. Provision the Server

1. Log in to UpCloud control panel
2. Create a new cloud server:
   - **Plan**: 2 GB RAM / 1 CPU minimum (4 GB recommended for build step)
   - **OS**: Ubuntu 24.04 LTS
   - **Location**: Choose nearest datacenter (e.g., Helsinki fi-hel1)
   - **SSH key**: Add your public key
3. Note the server's public IP address

## 2. Server Setup

SSH into the server:

```bash
ssh root@YOUR_SERVER_IP
```

### Install Docker

```bash
apt update && apt upgrade -y
apt install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### Create a deploy user (optional but recommended)

```bash
adduser --disabled-password deploy
usermod -aG docker deploy
mkdir -p /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
```

## 3. Deploy the Application

### Clone the repo

```bash
ssh deploy@YOUR_SERVER_IP   # or root if you skipped the deploy user
git clone https://github.com/YOUR_ORG/Geocachefi-mob.git
cd Geocachefi-mob
```

### Configure environment

```bash
cp backend/.env.example backend/.env
nano backend/.env
```

**Required changes in `.env`:**

| Variable | What to set |
|----------|-------------|
| `POSTGRES_HOST` | `postgres` (Docker service name) |
| `POSTGRES_PASSWORD` | A strong random password |
| `JWT_SECRET` | `openssl rand -base64 32` output |
| `SESSION_SECRET` | Another random string |
| `CORS_ALLOWED_DOMAINS` | `https://yourdomain.com` |
| `FRONTEND_REDIRECT_URI` | `https://yourdomain.com` |
| `FRONTEND_DOMAIN` | `yourdomain.com` |

### Build and start

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

This will:
- Build the React frontend and serve it via nginx on port 80
- Build and start the NestJS backend on port 3000 (internal)
- Start PostgreSQL 18
- Automatically run database migrations on backend startup

### Verify

```bash
# Check all containers are running
docker compose -f docker-compose.prod.yml ps

# Check backend logs
docker compose -f docker-compose.prod.yml logs backend

# Check database migrations ran
docker compose -f docker-compose.prod.yml logs backend | grep -i migration
```

Visit `http://YOUR_SERVER_IP` in a browser — you should see the app.

## 4. HTTPS with Let's Encrypt (Recommended)

### Option A: Caddy as reverse proxy (simplest)

Replace the nginx frontend with Caddy which handles TLS automatically.

Install Caddy on the host:

```bash
apt install -y caddy
```

Create `/etc/caddy/Caddyfile`:

```
yourdomain.com {
    # Frontend
    reverse_proxy localhost:80

    # Or if you want Caddy to serve static files directly,
    # change frontend port to 8080 in docker-compose.prod.yml and:
    # reverse_proxy localhost:8080
}
```

```bash
systemctl enable caddy
systemctl restart caddy
```

Caddy will automatically obtain and renew Let's Encrypt certificates.

### Option B: Certbot + nginx on host

If you prefer nginx on the host instead of in Docker:

1. Change the frontend port mapping in `docker-compose.prod.yml` from `"80:80"` to `"8080:80"`
2. Install nginx and certbot on the host:

```bash
apt install -y nginx certbot python3-certbot-nginx
```

3. Create `/etc/nginx/sites-available/geocachefi`:

```nginx
server {
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/geocachefi /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
certbot --nginx -d yourdomain.com
```

## 5. Backend HTTPS Note

The current `backend/src/main.ts` **hardcodes HTTPS** with self-signed certificates. In production, TLS should be terminated at the reverse proxy (Caddy or nginx), not in the Node.js process.

To fix this, modify `main.ts` to make HTTPS conditional:

```typescript
const isProduction = process.env.NODE_ENV === 'production';

let appOptions: NestApplicationOptions = { logger: ['verbose'] };

if (!isProduction) {
    appOptions.httpsOptions = {
        key: fs.readFileSync(path.join(__dirname, 'config/config/localhost-key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'config/config/localhost.crt')),
    };
}

const app = await NestFactory.create(AppModule, appOptions);
```

This lets the reverse proxy handle TLS in production while keeping local dev HTTPS working.

## 6. DNS Setup

Point your domain to the UpCloud server IP:

| Type | Name | Value |
|------|------|-------|
| A | @ | YOUR_SERVER_IP |
| A | www | YOUR_SERVER_IP |

## 7. Firewall

In the UpCloud control panel (or with `ufw`):

```bash
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
```

**Do not** expose port 5432 (PostgreSQL) to the internet — it's only accessible within Docker's internal network.

## 8. Maintenance

### View logs
```bash
docker compose -f docker-compose.prod.yml logs -f
```

### Update and redeploy
```bash
cd Geocachefi-mob
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

### Database backup
```bash
docker compose -f docker-compose.prod.yml exec postgres \
  pg_dump -U admin nestjs > backup_$(date +%Y%m%d).sql
```

### Restore from backup
```bash
cat backup_20260325.sql | docker compose -f docker-compose.prod.yml exec -T postgres \
  psql -U admin nestjs
```

## 9. UpCloud Managed Database (Alternative)

Instead of running PostgreSQL in Docker, you can use UpCloud's Managed Database service:

1. Create a Managed PostgreSQL instance in UpCloud control panel
2. Update `backend/.env` with the connection details provided by UpCloud:
   ```
   POSTGRES_HOST=your-db-instance.db.upclouddatabases.com
   POSTGRES_PORT=25060
   POSTGRES_USER=upadmin
   POSTGRES_PASSWORD=provided_password
   POSTGRES_DB=nestjs
   ```
3. Remove the `postgres` service from `docker-compose.prod.yml`
4. Remove `depends_on: postgres` from the backend service

This gives you automatic backups, high availability, and no database maintenance overhead.

## Files Created for Production

| File | Purpose |
|------|---------|
| `frontend/Dockerfile` | Multi-stage build: React → nginx |
| `frontend/nginx.conf` | Serves SPA, proxies `/api/` and `/users/` to backend |
| `backend/Dockerfile` | Multi-stage build: NestJS → Node.js |
| `backend/.env.example` | Template for production environment variables |
| `docker-compose.prod.yml` | Production orchestration (frontend + backend + postgres) |
