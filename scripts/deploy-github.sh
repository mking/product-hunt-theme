#!/bin/bash

set -e

[ 'master' = $(git rev-parse --abbrev-ref HEAD) ] || echo 'Must be on master'

git checkout gh-pages
git reset --hard master
npm run clean
npm run build:github
git add -f build
git commit -m 'update build'
git push -f
git checkout master
