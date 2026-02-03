# Frontend + Mock Backend (Docker Compose)

Spin up a React (frontend) together with a Node/Express mock API (mock-backend) using Docker Compose. Hot‑reload for source code is enabled via bind mounts; dependencies live inside the containers so your local `node_modules` never clash.

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
│  └─ ... (your app source)
└─ mock-backend/
   ├─ Dockerfile.dev
   └─ ... (your API source)
```

---

## How It Works

Two services are defined in `docker-compose.yml`:

* **frontend**

    * Builds from `frontend/Dockerfile.dev`.
    * Works in `/workspace/frontend` inside the container.
    * Exposes **localhost:3000 → container:3000**.
    * Mounts the repo source for live reload.
    * Keeps `node_modules` inside the container via anonymous volumes.

* **mock-backend**

    * Builds from `mock-backend/Dockerfile.dev`.
    * Works in `/workspace/mock-backend`.
    * Exposes **localhost:3001 → container:3001**.
    * Shares the same source mount pattern and in-container dependencies.

Both services are on the user-defined network **`app-net`** so they can talk to each other by service name (e.g. `http://mock-backend:3001`).

---

## Quick Start

1. **Build images** (first time or after Dockerfile changes):

   ```bash
   docker compose build
   ```

2. **Start the stack** (foreground logs):

   ```bash
   docker compose up
   ```

   Or detached:

   ```bash
   docker compose up -d
   ```

3. **Open apps:**

    * Frontend → [http://localhost:3000](http://localhost:3000)
    * Mock API → [http://localhost:3001](http://localhost:3001)

4. **Install deps** (runs inside containers; only needed when `package.json` changes):

   ```bash
   # Frontend
   docker compose exec frontend npm ci

   # Mock backend
   docker compose exec mock-backend npm ci
   ```

> Tip: With bind mounts, code edits on your host trigger hot reload inside the containers.

5. **Stop**

   ```bash
   docker compose down
   ```

6. **Clean rebuild** (if things get weird):

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
docker compose logs -f mock-backend

# Open a shell in a container
docker compose exec frontend sh
# or bash if available
# docker compose exec frontend bash

# Run scripts inside containers
docker compose exec frontend npm run dev
docker compose exec mock-backend npm test
```

---

## Environment Variables

The compose file sets:

**frontend**

```
NODE_ENV=development
PORT=3000
POSTGRES_HOST=host.docker.internal
POSTGRES_PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=nestjs

# JWT
JWT_SECRET=supersecret_change_me
JWT_EXPIRES=1h
```

**mock-backend**

```
NODE_ENV=development
PORT=3001
POSTGRES_HOST=host.docker.internal
POSTGRES_PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=nestjs

# JWT
JWT_SECRET=supersecret_change_me
JWT_EXPIRES=1h
```

### Adding your own env vars

* Create `.env` files next to your app code and load them in your `Dockerfile.dev` or runtime (e.g. Vite/Next env conventions), **or**
* Extend `docker-compose.yml` with `environment:` entries, **or**
* Use an `env_file:` section.

Example snippet:

```yaml
environment:
  API_BASE_URL: http://mock-backend:3001
```

---

## Networking & Ports

* `localhost:3000` → frontend container port `3000`.
* `localhost:3001` → mock-backend container port `3001`.
* Service-to-service calls should use service names on the `app-net` network:

    * `http://mock-backend:3001` from the frontend server side (or via proxy).

If your frontend makes browser calls to the API, point it to `http://localhost:3001` during local dev, or configure a dev proxy to `mock-backend:3001` to avoid CORS.

---

## Volumes Explained

```yaml
- ./:/workspace
- /workspace/mock-backend/node_modules
- /workspace/frontend/node_modules
```

* The **bind mount** `./:/workspace` maps your repo into the containers for live editing.
* The **anonymous volumes** on each `node_modules` path ensure container-installed dependencies are not overwritten by (or dependent on) your host.

**When to reinstall deps**: whenever `package.json` or `package-lock.json` changes, run `npm ci` inside the respective container.

---

## Troubleshooting

* **Port already in use (EADDRINUSE)**

    * Something else is running on 3000/3001. Stop it, or change host ports in `docker-compose.yml`.

* **Code changes aren’t reflected**

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
A: From your browser, use `http://localhost:3001`. From server-side code or within the Docker network, use `http://mock-backend:3001`.

**Q: Can I add another service (e.g., database)?**
A: Yes—add a new service to `docker-compose.yml` and attach it to `app-net`. Then configure the app to use the new service by name (e.g., `postgres:5432`).

**Q: Do I need Node installed locally?**
A: No. All `npm` installs and runs happen inside containers.

**Q: How do I run tests?**
A: Exec into the appropriate service and run your test command, e.g., `docker compose exec mock-backend npm test`.

**Q: Can I change the ports?**
A: Yes. Edit the left-side host port in the `ports:` mappings (e.g., `"8080:3000"`).

**Q: problems in starting up environment?**
A: Run `docker compose down -v` to remove all volumes and then remove all images related to problematic container/s


---

## Next Steps

* Add your framework-specific dev server or proxy config (Vite/Next) to forward `/api` to `http://mock-backend:3001`.
* Wire your frontend to call the mock API.
* Commit this README for your team.
