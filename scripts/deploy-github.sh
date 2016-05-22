#!/bin/bash

set -e

git checkout gh-pages
npm run clean
npm run build:github
git add -f build
git commit -am 'update build'
git push
git checkout master
