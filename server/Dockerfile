# pull official base image
FROM python:3.8.1-alpine

# install dependencies
RUN apk update && \
    apk add --no-cache --virtual build-deps \
    openssl-dev libffi-dev gcc python3-dev musl-dev \
    postgresql-dev netcat-openbsd

# set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set working directory
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# add app
COPY . /usr/src/app
