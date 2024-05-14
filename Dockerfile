FROM nginx:1.9-alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /app