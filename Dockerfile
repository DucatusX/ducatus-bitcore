FROM node:22.12.0

RUN set -x

WORKDIR /ducatuscore

COPY package*.json ./
COPY yarn.lock ./
COPY packages/*/package*.json packages/

RUN yarn install 

COPY . .

RUN yarn compile