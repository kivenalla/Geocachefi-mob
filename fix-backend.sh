docker compose down
docker rmi my-backend || true
docker compose build --no-cache backend
