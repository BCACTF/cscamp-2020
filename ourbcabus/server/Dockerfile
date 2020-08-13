FROM node:14
WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y libnss3 libatk-bridge2.0 libx11-xcb1 libxcb-dri3-0 libdrm2 libgbm1 libasound2 libxss1 libgtk-3-0

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 1337

CMD [ "yarn", "start" ]