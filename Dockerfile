FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./confiax-frontend/package.json .

RUN yarn

COPY ./confiax-frontend/ .

EXPOSE 3000

CMD yarn start