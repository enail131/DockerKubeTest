FROM node:12.16.1-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]