FROM node:22
WORKDIR /app

# Install dependencies (express & mongo client)
COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
