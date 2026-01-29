FROM node:20-alpine

WORKDIR /app
COPY package.json server.js ./
RUN npm install

USER node

EXPOSE 8080
CMD ["npm", "start"]