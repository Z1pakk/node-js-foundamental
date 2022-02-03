const fs = require('fs');
const path = require('path');

// console.log('Start');
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// })
//
// console.log('End');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'wg3 2135 3', (err) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log('Файл записан');
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), '\nКонец', (err) => {
//         if (err) {
//             throw err;
//         }
//
//         console.log('Файл дополнен');
//     })
// })

const writeFileAsync = async (path, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return rej(err.message);
            }

            res();
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((res, rej) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return rej(err.message);
            }

            res();
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return rej(err.message);
            }

            res(data);
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise((res, rej) => {
        fs.rm(path, (err) => {
            if (err) {
                return rej(err.message);
            }

            res();
        })
    })
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'test Data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n1234'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n1235'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n1236'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n1237'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('Файл удален'))

// Exercise 1.
const text = process.env.TEXT || '';
console.log(text)

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then((data) => writeFileAsync(path.resolve(__dirname, 'count.txt'), data.split(' ').length.toString()))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

// cross-env TEXT="1 2 34 5 7" node ./lessons/file-system.js

