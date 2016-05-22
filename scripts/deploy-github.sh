#!/bin/bash

set -e

if [ 'master' != $(git rev-parse --abbrev-ref HEAD) ]; then
    echo 'You must be on master to deploy.';
    exit 1;
fi

git checkout gh-pages
git reset --hard master
npm run clean
npm run build:github
git add -f build
git commit -m 'update build'
git push -f
git checkout master
