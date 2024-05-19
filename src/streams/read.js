import fs from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join('C:/RIS/mitso-nodejs-basic/src/streams/files', 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });

    readStream.on('end', () => {
        console.log('\nFile reading completed.');
    });
};

await read();