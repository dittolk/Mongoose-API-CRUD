FROM node:20.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon

EXPOSE 2000

CMD [ "nodemon", "." ]
