import fs from 'fs';
import path from 'path';
const write = async () => {
    const filePath = path.join('C:/RIS/mitso-nodejs-basic/src/streams/files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    // Обработка потока данных из stdin
    process.stdin.pipe(writeStream);

};

await write();