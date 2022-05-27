FROM buildkite/puppeteer:latest

RUN mkdir /app
WORKDIR /app

COPY package*.json tsconfig.json jestconfig.json ./
RUN npm ci
COPY . .