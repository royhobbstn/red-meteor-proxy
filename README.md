# red-meteor-proxy

Proxy for distributing domain urls & ssl to multiple docker containers.

*Run Command:*

```
sudo docker run --restart unless-stopped  --name proxy -v /etc/letsencrypt/archive/red-meteor.com:/ssl/docker -p 443:443 -p 80:80 -d royhobbstn/red-meteor-proxy
```

