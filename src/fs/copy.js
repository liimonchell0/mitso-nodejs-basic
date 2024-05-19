import { existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join } from 'path';
const copy = async () => {
    const sourceDir = join('C:/RIS/mitso-nodejs-basic/src/fs/', 'files');
    const destDir = join('C:/RIS/mitso-nodejs-basic/src/fs/', 'files_copy');

    // Проверяем, существует ли исходная папка
    if (!existsSync(sourceDir)) {
        throw new Error('FS operation failed: source directory does not exist');
    }

    // Проверяем, существует ли целевая папка
    if (existsSync(destDir)) {
        throw new Error('FS operation failed: destination directory already exists');
    }

    // Рекурсивная функция для копирования содержимого папки
    function copyRecursive(src, dest) {
        // Создаем целевую папку
        mkdirSync(dest, { recursive: true });

        // Получаем список файлов и папок в исходной папке
        const items = readdirSync(src);

        // Копируем каждый элемент из исходной папки в целевую
        items.forEach((item) => {
            const srcPath = join(src, item);
            const destPath = join(dest, item);
            const stats = statSync(srcPath);

            if (stats.isDirectory()) {
                // Если элемент - папка, копируем ее рекурсивно
                copyRecursive(srcPath, destPath);
            } else {
                // Если элемент - файл, копируем его
                copyFileSync(srcPath, destPath);
            }
        });
    }

    // Начинаем копирование
    copyRecursive(sourceDir, destDir);
    console.log('Файлы скопированы');
};


await copy();
