
import fs from 'fs';
import path from 'path';
const rename = async () => {
   
    const oldPath = path.join('C:/RIS/mitso-nodejs-basic/src/fs/files', 'wrongFilename.txt');
    const newPath = path.join('C:/RIS/mitso-nodejs-basic/src/fs/files', 'properFilename.md');

    // Проверяем, существует ли файл wrongFilename.txt
    if (!fs.existsSync(oldPath)) {
        throw new Error('FS operation failed: source file does not exist');
    }

    // Проверяем, существует ли файл properFilename.md
    if (fs.existsSync(newPath)) {
        throw new Error('FS operation failed: destination file already exists');
    }

    // Переименовываем файл
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log('Файл успешно переименован');
    });
};

await rename();