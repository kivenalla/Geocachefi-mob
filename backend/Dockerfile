# ---- Build stage ----
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --force

COPY . .
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --force --omit=dev

COPY --from=build /app/dist ./dist

# Copy SSL certs (needed by main.ts — see DEPLOYMENT.md for alternatives)
COPY src/config ./dist/config

EXPOSE 3000

CMD ["node", "dist/main"]
