#!/bin/bash

set -e

git checkout gh-pages
npm run clean
npm run build:github
git add -A .
