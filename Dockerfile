FROM nginx:stable-alpine AS production-stage
COPY ./dist/* /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

ENV VITE_APP_TITLE="IPtable-Controller-Master-Frontend"
ENV VITE_HOST_IP="127.0.0.1"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
