FROM nginx:stable
LABEL description="KubeZephyr"
COPY dist/ /usr/share/nginx/html/web/
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
