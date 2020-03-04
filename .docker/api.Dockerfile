FROM node:12.16.1

WORKDIR /api

COPY package*.json ./ 

RUN npm install

COPY . .

CMD [ "npm", "run", "start:watch" ]