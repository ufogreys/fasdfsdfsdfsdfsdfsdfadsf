FROM node:18.14 as build-stage
RUN mkdir -p /data/app
WORKDIR /data/app
COPY . /data/app
RUN npm install && npm cache clean --force
RUN npm run build
FROM nginx:1.15
COPY --from=build-stage /data/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /data/app/build /var/www/tmp
