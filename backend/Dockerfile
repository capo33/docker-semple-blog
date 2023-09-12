FROM node:16-alpine

RUN npm install -g nodemon

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]

