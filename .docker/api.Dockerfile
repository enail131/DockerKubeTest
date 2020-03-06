FROM node:12.16.1

WORKDIR /api

EXPOSE 3001

COPY package*.json ./ 

RUN npm install

COPY . .

CMD [ "npm", "start" ]