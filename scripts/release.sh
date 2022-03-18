#!/bin/bash

TAG=$(git describe --tags --abbrev=0)
VERSION=${TAG:1}

echo $TAG
echi $VERSION

./node_modules/.bin/release-it $VERSION --config ./config/release-it/release.js --ci
