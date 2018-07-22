FROM node:8.11.3-alpine

EXPOSE 8080

WORKDIR /app
COPY . /app
RUN npm install

USER node

CMD [ "npm", "start" ]
