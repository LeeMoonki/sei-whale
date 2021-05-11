#!/bin/bash

docker-compose down
rm -rf ./db/db_data
docker-compose up --build -d
