'use strict';
$appName = $1;

console.log(`Creating a new React app with preconfigured aapkit in ${chalk.green(root)}.`);
console.log("Create app directory");

mkdir $appName && cd $appName;

git init && touch app.js && npm init -y


console.log("Created your app......Enjoy");
