db 실행
```
docker-compose up -d
docker-compose up --build -d
```
db CLI 접속
```
docker exec -it mariadb_container bash
mariadb -p
[write password]
use [DATABASE NAME]

# show databases;
# show tables;
```
