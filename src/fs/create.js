import fs from 'fs';

const create = async () => {
  try {
     const filePath = 'C:/RIS/mitso-nodejs-basic/src/fs/files/fresh.txt'
       const fileContent = 'I am fresh and young!';
       await fs.promises.writeFile(filePath, fileContent);

    console.log('Новый файл успешно создан.');
  } catch (error) {
    console.error('Ошибка при создании файла:', error);
  }
};

await create();
//создает новый файл