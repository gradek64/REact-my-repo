FROM node:18.16.0-alpine

ARG GITHUB_PACKAGES_AUTH_TOKEN
ENV GITHUB_PACKAGES_AUTH_TOKEN=$GITHUB_PACKAGES_AUTH_TOKEN

WORKDIR /app

# install dependencies first so that it is cached
COPY ./.npmrc ./package.json ./yarn.lock ./

RUN yarn --production

# every step above this point should be the same as in the stub dockerfile
# so that we can use the cache

COPY ./babel.config.js ./cypress.config.js ./tsconfig.json ./
COPY ./config/webpack ./config/webpack
COPY ./config/envconfig ./config/envconfig
COPY ./config/newrelic ./config/newrelic
COPY ./config/i18n ./config/i18n
COPY ./cypress/docker-compose-cypress.yml ./cypress/docker-compose-cypress.yml
COPY ./public ./public

COPY ./src ./src

ARG DOCKER_ENV_TYPE=production
ENV NODE_ENV=$DOCKER_ENV_TYPE
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN yarn build:client --mode $DOCKER_ENV_TYPE && yarn build:server --mode $DOCKER_ENV_TYPE

EXPOSE 8080

ENTRYPOINT ["yarn", "serve"]

STOPSIGNAL SIGINT
