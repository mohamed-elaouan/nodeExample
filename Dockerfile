FROM node:16
WORKDIR /app
COPY . /app
RUN npm install && npm install express
COPY . .
CMD ["node", "server.js"]