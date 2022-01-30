export NODE_ENV=test
npm run transfile
pm2 delete all
pm2 start ../lib/app.js
