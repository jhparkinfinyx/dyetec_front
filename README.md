#sudo n stable



# nginx.conf 

server {
    listen 80 default_server;
    server_name /var/www/example.com;

    root /var/www/example.com;
    index index.html index.htm;      

    location ~* \.(?:manifest|appcache|html?|xml|json)$ {
      expires -1;
      # access_log logs/static.log; # I don't usually include a static log
    }

    location ~* \.(?:css|js)$ {
      try_files $uri =404;
      expires 1y;
      access_log off;
      add_header Cache-Control "public";
    }

    # Any route containing a file extension (e.g. /devicesfile.js)
    location ~ ^.+\..+$ {
      try_files $uri =404;
    }

    # Any route that doesn't have a file extension (e.g. /devices)
    location / {
        try_files $uri $uri/ /index.html;
    }
}