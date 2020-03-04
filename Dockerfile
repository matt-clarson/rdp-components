FROM node:13.8.0-alpine3.11
WORKDIR /app
COPY ./package* /app/
RUN apk add --no-cache python make g++
RUN npm ci
EXPOSE 5000
