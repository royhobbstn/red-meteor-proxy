# red-meteor-proxy

Proxy for distributing domain urls & ssl to multiple docker containers.

*Run Command:*

```
sudo docker run --restart unless-stopped  --name proxy -v /etc/letsencrypt/archive/red-meteor.com:/ssl/docker -p 443:443 -p 80:80 -d royhobbstn/red-meteor-proxy
```


*Renew SSL:*

```
sudo docker stop proxy
sudo docker rm proxy
sudo docker pull royhobbstn/red-meteor-proxy 
sudo docker run -it --rm -p 443:443 -p 80:80 --name certbot -v "/etc/letsencrypt:/etc/letsencrypt" -v "/var/lib/letsencrypt:/var/lib/letsencrypt" quay.io/letsencrypt/letsencrypt:latest renew
sudo docker run --restart unless-stopped  --name proxy -v /etc/letsencrypt/archive/red-meteor.com:/ssl/docker -p 443:443 -p 80:80 -d royhobbstn/red-meteor-proxy
```
