FROM node:20-alpine

WORKDIR /app

# Pasang dependensi produksi
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev --no-audit; else npm install --omit=dev --no-audit; fi

# Salin kode sumber backend
COPY src ./src

# Siapkan folder uploads
RUN mkdir -p /app/uploads

EXPOSE 5000

ENV NODE_ENV=production
ENV PORT=5000
ENV UPLOADS_DIR=/app/uploads

CMD ["node", "src/server.js"]
