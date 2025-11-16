#!/usr/bin/env bash
set -x

rspack \
  --config ./src/reporters/web/webpack.config.js \
  --mode production
