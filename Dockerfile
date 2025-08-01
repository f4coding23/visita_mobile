# Dockerfile.dev
FROM node:22-alpine

# Evita analytics y limita memoria
ENV NG_CLI_ANALYTICS=false
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

# Copia sólo package.json y package-lock.json para instalar deps primero (mejor uso de la cache)
COPY package*.json ./

# Instala Angular CLI global y dependencias del proyecto
RUN npm install -g @angular/cli@19 \
    && npm install --legacy-peer-deps --verbose

# Copia el resto del código (si usas .dockerignore, excluye node_modules y dist)
COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll=2000"]
