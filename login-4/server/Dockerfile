FROM node:14
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY index.hbs ./
COPY flag.hbs ./
COPY index.js ./

EXPOSE 1337

CMD [ "yarn", "start" ]