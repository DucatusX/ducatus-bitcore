FROM node:22.12.0

RUN set -x \
    && node -v \
    && npm -v 
    
RUN npm i -g yarn@1.22.22

WORKDIR /ducatuscore

COPY package*.json lerna.json ./

RUN yarn install

COPY . .