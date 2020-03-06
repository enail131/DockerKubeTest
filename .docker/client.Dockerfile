FROM node:12.16.1-alpine

WORKDIR /client

EXPOSE 5000

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm i -g serve

CMD ["serve", "-s", "build"]