FROM node:16.13.2

ARG GITHUB_PACKAGES_AUTH_TOKEN
ENV GITHUB_PACKAGES_AUTH_TOKEN=$GITHUB_PACKAGES_AUTH_TOKEN

WORKDIR /app

COPY ./.npmrc ./package.json ./yarn.lock ./

RUN yarn --development

COPY . .

EXPOSE 3011

CMD STUB_PORT=3011 yarn "start:stub:sessions"
