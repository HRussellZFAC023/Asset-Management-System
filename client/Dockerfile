# pull official base image
FROM node:13.5.0-alpine

# add `/node_modules/.bin` to $PATH
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

# install and cache app dependencies
COPY package.json /package.json

# set working directory
WORKDIR /usr/src/app
ADD . /usr/src/app

EXPOSE 3000
EXPOSE 35729

RUN apk --no-cache --virtual build-dependencies add \
  python \
  make \
  g++

RUN npm install

# start app
CMD ["npm", "start"]
