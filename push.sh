#!/bin/bash

docker build -t jomartz/my-media-world:v0.1 . --no-cache
docker image push jomartz/my-media-world:v0.1