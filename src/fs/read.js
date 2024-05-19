import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
const read = async () => {
    const filePath = join('C:/RIS/mitso-nodejs-basic/src/fs/files', 'fileToRead.txt');

  try {
    // Проверяем, существует ли файл
    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath, 'utf8');
      console.log("Содержание файла:");
      console.log(fileContent);
    } else {
      throw new Error("FS operation failed");
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
};

await read();