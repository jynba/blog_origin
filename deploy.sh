#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.j-y-y-y.top' > CNAME

git init
git add .
git commit -m '新版'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f git@github.com:jynba/jynba.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/vuepress.git master:gh-pages

cd -
