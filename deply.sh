#!/bin/bash

echo "***** start *****"

echo "Docker Compose operations starting"
docker-compose down    # Stops and removes containers, networks, and volumes
docker-compose build   # Builds the services
docker-compose up -d   # Starts the services in detached mode
docker image prune -af # Removes dangling images

echo "***** end *****"
