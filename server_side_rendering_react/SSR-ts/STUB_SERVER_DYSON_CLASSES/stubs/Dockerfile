FROM node:18.16.0-alpine

ARG GITHUB_PACKAGES_AUTH_TOKEN
ENV GITHUB_PACKAGES_AUTH_TOKEN=$GITHUB_PACKAGES_AUTH_TOKEN

WORKDIR /app

# install dependencies first so that it is cached
COPY ./.npmrc ./package.json ./yarn.lock ./

RUN yarn --production

# every step above this point should be the same as in the app dockerfile
# so that we can use the cache

COPY ./babel.config.js ./cypress.config.js ./tsconfig.json ./
COPY ./public/stub ./public/stub
COPY ./stubs ./stubs
COPY ./src/ ./src

EXPOSE 3011

CMD yarn "start:stub:sessions"
