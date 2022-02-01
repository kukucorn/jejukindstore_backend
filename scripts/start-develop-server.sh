git stash
git switch develop
git pull origin develop

export NODE_ENV=development

npm install
npm run transfile

pm2 delete all
pm2 start ../lib/app.js
