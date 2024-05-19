const parseArgs = () => {
    const args = process.argv.slice(2); // Получаем аргументы, начиная со 2-го
    const options = {};
  
    // Проходим по аргументам и заполняем объект options
    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].slice(2); // Вырезаем "--" из начала ключа
      const propValue = args[i + 1];
      options[propName] = propValue;
    }
  
    // Формируем строку для вывода
    let output = "";
    for (const propName in options) {
      const propValue = options[propName];
      output += `${propName} is ${propValue}\n`;
    }
  
    // Выводим результат в консоль
    console.log(output.trim());
};

parseArgs();