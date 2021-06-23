#!/bin/bash

./node_modules/.bin/release-it $CIRCLE_TAG --config ./config/release-it/release.js --release-version --ci
