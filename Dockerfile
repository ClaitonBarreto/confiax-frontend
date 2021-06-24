FROM node:12-alpine

WORKDIR /confiax-frontend

COPY ./confiax-frontend/package.json .

RUN yarn

COPY ./confiax-frontend .

EXPOSE 3000

CMD yarn start