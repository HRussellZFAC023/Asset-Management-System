# pull official base image
FROM node:13.5.0-alpine

RUN apk --no-cache --virtual build-dependencies add \
  python \
  make \
  g++

# install and cache app dependencies
COPY package.json /package.json
RUN npm install

# add `/node_modules/.bin` to $PATH
ENV PATH $PATH:/node_modules/.bin

# set working directory
WORKDIR /usr/src/app
ADD . /usr/src/app

EXPOSE 3000
EXPOSE 35729

# start app
CMD ["npm", "start"]
