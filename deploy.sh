#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'varzy.me' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:varzy/varzy.github.io.git master

cd -
