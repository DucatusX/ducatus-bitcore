FROM node:22.12.0

RUN set -x

WORKDIR /ducatuscore

COPY package*.json ./
COPY yarn.lock ./
COPY packages/crypto-rpc/package*.json packages/crypto-rpc/
COPY packages/ducatuscore-build/package*.json packages/ducatuscore-build/
COPY packages/ducatuscore-client/package*.json packages/ducatuscore-client/
COPY packages/ducatuscore-crypto/package*.json packages/ducatuscore-crypto/
COPY packages/ducatuscore-lib/package*.json packages/ducatuscore-lib/
COPY packages/ducatuscore-lib-cash/package*.json packages/ducatuscore-lib-cash/
COPY packages/ducatuscore-lib-duc/package*.json packages/ducatuscore-lib-duc/
COPY packages/ducatuscore-mnemonic/package*.json packages/ducatuscore-mnemonic/
COPY packages/ducatuscore-node/package*.json packages/ducatuscore-node/
COPY packages/ducatuscore-p2p/package*.json packages/ducatuscore-p2p/
COPY packages/ducatuscore-p2p-cash/package*.json packages/ducatuscore-p2p-cash/
COPY packages/ducatuscore-p2p-duc/package*.json packages/ducatuscore-p2p-duc/
COPY packages/ducatuscore-wallet-client/package*.json packages/ducatuscore-wallet-client/
COPY packages/ducatuscore-wallet-service/package*.json packages/ducatuscore-wallet-service/

RUN yarn install

COPY . .

RUN yarn compile