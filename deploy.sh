#!/bin/bash
# Deploy code to S3.

npm run build
aws s3 cp index.html s3://fancykaraoke.com/index.html
aws s3 cp ./public/browserconfig.xml s3://fancykaraoke.com/browserconfig.xml
aws s3 cp ./public/favicon.ico s3://fancykaraoke.com/favicon.ico
aws s3 cp ./public/manifest.json s3://fancykaraoke.com/manifest.json
aws s3 cp ./dist/ s3://fancykaraoke.com/ --recursive --exclude "*" --include "*.css" --include "*.js"
aws s3 cp ./public/images/ s3://fancykaraoke.com/images/ --recursive --exclude "*" --include "*.png" --include "*.svg"
