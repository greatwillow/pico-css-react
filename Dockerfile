FROM node:16.3.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json tsconfig.json jestconfig.json ./
RUN npm ci
COPY . .