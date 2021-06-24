FROM node:12-alpine

WORKDIR /frontend

COPY ./frontend/package.json .

RUN yarn

COPY ./frontend .

EXPOSE 3000

CMD yarn start