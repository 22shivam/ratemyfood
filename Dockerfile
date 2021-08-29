FROM node:14

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend .

EXPOSE 8080
CMD ["npm", "start"]