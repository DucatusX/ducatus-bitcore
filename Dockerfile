FROM node:22.12.0

RUN set -x

WORKDIR /ducatuscore

COPY . .

RUN yarn install && yarn compile