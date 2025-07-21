# Imagen base Alpine con Node.js 22
FROM node:22-alpine

# Variables de entorno
ENV NG_CLI_ANALYTICS=false
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Directorio de trabajo
WORKDIR /app

# Instalar Angular CLI 19
RUN npm install -g @angular/cli@19

# Comando de inicio
CMD ["sh", "-c", "\
    if [ ! -f package.json ]; then \
        ng new acvisita-mobile-v2 --routing --style=css --skip-git --skip-tests --ssr=false --directory=. --standalone; \
    fi && \
    npm install --verbose && \
    ng serve --host 0.0.0.0 --port 4200 --disable-host-check --poll=2000"]

EXPOSE 4200
