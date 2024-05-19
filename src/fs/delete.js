import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
const remove = async () => {
    const filePath = join('C:/RIS/mitso-nodejs-basic/src/fs/files', 'fileToRemove.txt');

    try {
      // Проверяем, существует ли файл
      if (existsSync(filePath)) {
        unlinkSync(filePath);
        console.log("File deleted successfully!");
      } else {
        throw new Error("FS operation failed");
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
};

await remove();