# Specify a base image
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
# Commands to install additional arguments
RUN npm install

COPY ./ ./
# Default command
CMD [ "npm", "start" ]