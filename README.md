npm init

npm install -g @vue/cli

winpty vue.cmd create build-a-bot

> Manually set feature

cd build-a-bot/

 code .

Add rules in .eslintrc.js
 rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'operator-linebreak': 0,
  },


 npm run serve

voir code

source :
https://github.com/jmcooper/vuejs-fundamentals


Install sass
npm install node-sass sass-loader@10.0.5 --save-dev

npm install vue-router --save


Après avoir créer les fichier router/index.js et modifier main.js
error :vuejs error Missing file extension for "./router" import/extensions
Solution:
https://github.com/vuejs/vue-cli/issues/2628

'import/resolver': { 
      webpack: { 
        config: require.resolve('@vue/cli-service/webpack.config.js') 
      },
    },
et
npm install eslint-import-resolver-webpack --save-dev


Install Vuex
npm install vuex --save

Get the API on
git clone https://github.com/jmcooper/build-a-bot-server
cd build-a-bot-server
npm init
npm start

Install axios to use api rest 
Using Axios to Consume APIs
npm install axios --save

Build for production
npm run build
equivalent as 
npm run build -- --mode=production

npm run build -- --mode=development
npm run build -- --mode=staging


Copy dist folder to put build on server (node?)
cp -r ../build-a-bot/dist .

start server 
npm start

Add deep linikng on server
use express middlewear

npm install --save express
npm install --save connect-history-api-fallback

* https://forum.vuejs.org/t/how-do-i-implement-connect-history-api-fallback-so-that-url-paths-redirect-to-index-html/10938/2
Install express (of course it’s already installed, but really just adding this as a dependency) from my project’s root directory:
npm install --save express
Install connect-history-fallback-api as a dependency:
npm install --save connect-history-api-fallback
Create a server.js file in the project’s root. (See script below.)
Update package.json start script so that now will use express instead of serve:
"start": "node server.js"
Run now!

Voir le webpackconfig file
vue inspect --mode=production > webpack.config.js









