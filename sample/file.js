const fs = require('fs')


// Read file
// fs.readFile('./docs/doc1.txt', (err, data) => {
//     if (err) {
//         console.log('error', err)
//     }
//     console.log(data.toString())
// })

// Write file

// fs.writeFile('./docs/doc1.txt', 'Hello, Ram!', () => {
//     console.log('Success');
// })

// fs.writeFile('./docs/doc2.txt', 'Hello, Again!', () => {
//     console.log('Success');
// })

// Directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

if (fs.existsSync('./docs/deleteFile.txt')) {
    fs.unlink('./docs/deleteFile.txt', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('file removed');
    })
} 