FROM node:16

WORKDIR /usr/src/app

COPY package.json package*.json ./
COPY . .

RUN npm ci

CMD npm run watch

EXPOSE 9000