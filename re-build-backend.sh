# Try this if nothing else works and then change some ts file under backend folder to restart server
docker compose exec backend npm install
docker compose exec backend npm run build
docker compose exec backend touch /usr/src/app/src/main.ts