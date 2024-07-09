FROM node:21-alpine as build

WORKDIR /frontend

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend/ ./

RUN npm run build

FROM nginx:1.25.5-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY --from=build /frontend/dist /usr/share/nginx/html
COPY ./nginx/domain.cert.pem /etc/ssl/certs/domain.cert.pem
COPY ./nginx/private.key.pem /etc/ssl/private/private.key.pem
CMD ["nginx", "-g", "daemon off;"]
