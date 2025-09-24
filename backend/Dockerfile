FROM node:20-alpine
WORKDIR /app

# Salin package.json hanya dari dalam backend
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode backend
COPY . .

# Ekspos port backend
EXPOSE 3000

# Jalankan server
CMD ["node", "server.js"]
