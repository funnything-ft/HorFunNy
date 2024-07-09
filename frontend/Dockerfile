FROM node:21-alpine

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN npm install

COPY . /app/frontend/
CMD ["yarn", "run", "dev"]
