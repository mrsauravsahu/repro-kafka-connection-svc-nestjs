ARG NODE_VERSION=18.13.0
FROM node:${NODE_VERSION} as dev

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

RUN npm run build

ENV NODE_ENV=production

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm i

COPY --from=dev /app/dist ./

CMD node main.js
