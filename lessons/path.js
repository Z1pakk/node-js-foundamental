const path = require('path');

console.log(path.join(__dirname, 'first', 'second'));
console.log(path.resolve('first', 'second'));

const fullpath = path.resolve('first', 'second');
console.log(path.parse(fullpath));

// ----------------------------------

const siteUrl = "http://localhost:808/users?id=5123";

const url = new URL(siteUrl);

console.log(url)
