const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'count.txt'), (err,data) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'count.txt'));
//
// // one chunk is 64 kbs by default
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => {
//     console.log('The file reading ended')
// })
//
// stream.on('open', () => {
//     console.log('The file reading started')
// })
//
// stream.on('err', (e) => {
//     console.log(e)
// })


// const stream = fs.createWriteStream(path.resolve(__dirname, 'count2.txt'));
// for (let i = 0; i < 20; i++) {
//     stream.write(i + '\n');
// }
// stream.end();
// stream.close();
// stream.destroy();
// stream.on('error', (e) => {
//      console.log(e)
// })

// const http = require('http')
//
// http.createServer((req, res) => {
//     // req - readable stream
//     // res - writable stream
//
//     const stream = fs.createReadStream(path.resolve(__dirname, 'count2.txt'));
//
//     stream.pipe(res);
// })
