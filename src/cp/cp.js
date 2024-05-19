import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Создаем дочерний процесс из файла script.js с переданными аргументами
    const childProcess = spawn('node', ['C:/RIS/mitso-nodejs-basic/src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    // Перенаправляем потоки между главным и дочерним процессами
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);

    // Ждем завершения дочернего процесса
    childProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Пример вызова функции с аргументами
spawnChildProcess(['arg1', 'arg2', 'arg3']);
