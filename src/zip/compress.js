import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const compress = async () => {
    
    const filePath = path.join('C:/RIS/mitso-nodejs-basic/src/zip/files', 'fileToCompress.txt');
    const archivePath = path.join('C:/RIS/mitso-nodejs-basic/src/zip/files', 'archive.gz');

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(archivePath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File has been compressed successfully.');
    });

    writeStream.on('error', (err) => {
        console.error('Error compressing file:', err);
    });
};

await compress('fileToCompress.txt', 'archive.gz');