const fs = require('fs')

const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/doc4.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- new chunk -----');
//     console.log(chunk);
//     writeStream.write(`\nNEW CHUNK\n`)
//     writeStream.write(chunk)
// })

//Piping
readStream.pipe(writeStream)

