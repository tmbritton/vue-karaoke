#!/bin/bash
# Deploy code to S3.

npm run build
aws s3 cp index.html s3://fancykaraoke.com/index.html
aws s3 cp ./dist/ s3://fancykaraoke.com/ --recursive --exclude "*" --include "*.css" --include "*.js"
