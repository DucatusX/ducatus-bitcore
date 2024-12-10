FROM node:16.13.2

RUN set -x \
    && node -v \
    && npm -v 
    
RUN npm i -g npm@8.19.3

WORKDIR /ducatuscore

COPY package*.json lerna.json ./

RUN npm ci

COPY . .

RUN npm run bootstrap && npm run compile