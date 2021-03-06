FROM nginx:stable
LABEL description="KubeZephyr"
COPY dist/ /usr/share/nginx/html/
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
