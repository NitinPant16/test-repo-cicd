FROM node:latest

MAINTAINER Nitin Pant  

RUN echo "Tryin to build my first application"

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 80

ENTRYPOINT ["npm","start"]
