'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');

// simulates build by replacing %rand% to random string in index.js and saving
// it to dist folder

let fileContents = fs.readFileSync('index.js').toString();
fileContents = fileContents.replace('%rand%', Math.random().toString());
mkdirp.sync('dist');
fs.writeFileSync('dist/index.js', fileContents);

console.log('Build succeded');
