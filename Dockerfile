FROM    registry.stuhome.com/devops/dockerepo/nginx:1.14.2
COPY    ./dist  /usr/share/nginx/html
COPY    ./nginx.conf    /etc/nginx/conf.d/
