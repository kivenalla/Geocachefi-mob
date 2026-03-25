# Frontend + Backend (Docker Compose)

Spin up the React frontend, Next.js frontend, NestJS backend, and PostgreSQL using Docker Compose. Hot‑reload for source code is enabled via bind mounts; dependencies live inside the containers so your local `node_modules` never clash.

> Works on macOS, Linux, and Windows (Docker Desktop/WSL2).

---

## Table of Contents

* [Requirements](#requirements)
* [Project Layout](#project-layout)
* [How It Works](#how-it-works)
* [Quick Start](#quick-start)
* [Everyday Commands](#everyday-commands)
* [Environment Variables](#environment-variables)
* [Networking & Ports](#networking--ports)
* [Volumes Explained](#volumes-explained)
* [Troubleshooting](#troubleshooting)
* [FAQ](#faq)

---

## Requirements

* **Docker** (Docker Desktop or Engine)
* **Docker Compose v2** (bundled with modern Docker Desktop)

Verify:

```bash
docker --version
docker compose version
```

---

## Project Layout

```
repo-root/
├─ docker-compose.yml
├─ frontend/
│  ├─ Dockerfile.dev
│  └─ ... (React CRA app)
├─ new-frontend/
│  ├─ Dockerfile.dev
│  └─ ... (Next.js app)
└─ backend/
   ├─ Dockerfile.dev
   └─ ... (NestJS API)
```

---

## How It Works

Four services are defined in `docker-compose.yml`:

* **frontend**

    * Builds from `frontend/Dockerfile.dev`.
    * Works in `/workspace/frontend` inside the container.
    * Exposes **localhost:3000 → container:3000**.
    * Mounts the repo source for live reload.
    * Keeps `node_modules` inside the container via anonymous volumes.

* **new-frontend**

    * Builds from `new-frontend/Dockerfile.dev`.
    * Works in `/workspace/new-frontend` inside the container.
    * Exposes **localhost:3004 → container:3004** (HTTPS).

* **backend**

    * Builds from `backend/Dockerfile.dev`.
    * Exposes **localhost:3003 → container:3000**.
    * Reads environment from `backend/.env`.

* **postgres**

    * Official PostgreSQL 18 image.
    * Exposes **localhost:5432 → container:5432**.
    * Data persisted in a named volume.

All services are on the user-defined network **`app-net`** so they can talk to each other by service name (e.g. `http://backend:3000`).

---

## Quick Start

1. **Set up environment** (first time only):

   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your settings
   ```

2. **Build images** (first time or after Dockerfile changes):

   ```bash
   docker compose build
   ```

3. **Start the stack** (foreground logs):

   ```bash
   docker compose up
   ```

   Or detached:

   ```bash
   docker compose up -d
   ```

4. **Open apps:**

    * Frontend → [http://localhost:3000](http://localhost:3000)
    * New Frontend → [https://localhost:3004](https://localhost:3004)
    * Backend API → [https://localhost:3003/api](https://localhost:3003/api) (Swagger docs)

5. **Install deps** (runs inside containers; only needed when `package.json` changes):

   ```bash
   docker compose exec frontend npm ci
   docker compose exec backend npm ci
   ```

> Tip: With bind mounts, code edits on your host trigger hot reload inside the containers.

6. **Stop**

   ```bash
   docker compose down
   ```

7. **Clean rebuild** (if things get weird):

   ```bash
   docker compose down -v --rmi local
   docker compose build --no-cache
   docker compose up
   ```

---

## Everyday Commands

```bash
# Stream logs
docker compose logs -f frontend
docker compose logs -f backend

# Open a shell in a container
docker compose exec frontend sh
docker compose exec backend sh

# Run scripts inside containers
docker compose exec frontend npm run lint
docker compose exec backend npm test
```

---

## Environment Variables

The compose file sets:

**frontend**

```
NODE_ENV=development
PORT=3000
```

**backend** (via `backend/.env`)

See `backend/.env.example` for all required variables including PostgreSQL, JWT, session, and OAuth settings.

### Adding your own env vars

* Create `.env` files next to your app code and load them in your `Dockerfile.dev` or runtime (e.g. Vite/Next env conventions), **or**
* Extend `docker-compose.yml` with `environment:` entries, **or**
* Use an `env_file:` section.

---

## Networking & Ports

* `localhost:3000` → frontend container port `3000`.
* `localhost:3004` → new-frontend container port `3004`.
* `localhost:3003` → backend container port `3000`.
* `localhost:5432` → PostgreSQL container port `5432`.
* Service-to-service calls should use service names on the `app-net` network:

    * `http://backend:3000` from the frontend server side.

---

## Volumes Explained

```yaml
- ./:/workspace
- /workspace/frontend/node_modules
```

* The **bind mount** `./:/workspace` maps your repo into the containers for live editing.
* The **anonymous volumes** on each `node_modules` path ensure container-installed dependencies are not overwritten by (or dependent on) your host.

**When to reinstall deps**: whenever `package.json` or `package-lock.json` changes, run `npm ci` inside the respective container.

---

## Troubleshooting

* **Port already in use (EADDRINUSE)**

    * Something else is running on the required port. Stop it, or change host ports in `docker-compose.yml`.

* **Code changes aren't reflected**

    * Ensure the containers are running with the bind mount (they are by default).
    * Some frameworks require `CHOKIDAR_USEPOLLING=1` for file watching inside Docker on certain hosts (e.g., WSL2/Windows). Add it under `environment:` for the affected service.

* **Permission issues with node\_modules**

    * The anonymous volume should isolate them. If you changed user IDs or switched OS, try `docker compose down -v` then reinstall deps in the containers.

* **Package installs not sticking**

    * Make sure you ran `npm ci` **inside** the container (via `docker compose exec`).

* **Rebuild after Dockerfile changes**

    * `docker compose build` (or `--no-cache`).

---

## FAQ

**Q: How does the frontend reach the backend?**
A: From your browser, the frontend uses `REACT_APP_API_URL` (defaults to `http://localhost:3003`). Within the Docker network, use `http://backend:3000`.

**Q: Do I need Node installed locally?**
A: No. All `npm` installs and runs happen inside containers.

**Q: How do I run tests?**
A: Exec into the appropriate service and run your test command, e.g., `docker compose exec frontend npm test`.

**Q: Can I change the ports?**
A: Yes. Edit the left-side host port in the `ports:` mappings (e.g., `"8080:3000"`).

**Q: Problems in starting up environment?**
A: Run `docker compose down -v` to remove all volumes and then remove all images related to problematic container/s.
