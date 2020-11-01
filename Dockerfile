FROM node:12.13-alpine

RUN npm install -g @angular/cli@9.1.12

ENV APP_DIR /opt/app

WORKDIR ${APP_DIR}

COPY package.json package-lock.json ${APP_DIR}/

RUN  npm install
