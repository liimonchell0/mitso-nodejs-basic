import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
const decompress = async () => {
    const archivePath = path.join('C:/RIS/mitso-nodejs-basic/src/zip/files', 'archive.gz');
    const filePath = path.join('C:/RIS/mitso-nodejs-basic/src/zip/files', 'fileToCompress.txt');

    const readStream = fs.createReadStream(archivePath);
    const writeStream = fs.createWriteStream(filePath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File has been decompressed successfully.');
    });

    writeStream.on('error', (err) => {
        console.error('Error decompressing file:', err);
    });
};

await decompress();