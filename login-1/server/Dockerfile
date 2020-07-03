FROM node:14
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY index.html ./
COPY index.js ./
COPY routes.js ./
COPY securelogin.js ./

EXPOSE 1337

CMD [ "yarn", "start" ]