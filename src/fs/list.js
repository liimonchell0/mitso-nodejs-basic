import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
const list = async () => {
    const folderPath = join('C:/RIS/mitso-nodejs-basic/src/fs/', 'files');

    try {
      // Проверяем, существует ли папка
      if (existsSync(folderPath)) {
        const fileNames = readdirSync(folderPath);
        console.log("Файлы находящиеся в папке:");
        fileNames.forEach(fileName => {
          console.log(`- ${fileName}`);
        });
      } else {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
};

await list();