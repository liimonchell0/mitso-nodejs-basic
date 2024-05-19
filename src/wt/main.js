import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < numCores; i++) {
        workers.push(
            new Promise((resolve) => {
                const worker = new Worker(path.resolve('C:/RIS/mitso-nodejs-basic/src/wt/', 'worker.js'));

                worker.on('message', (data) => {
                    resolve({ status: 'resolved', data });
                });

                worker.on('error', () => {
                    resolve({ status: 'error', data: null });
                });

                worker.on('exit', (code) => {
                    if (code !== 0) {
                        resolve({ status: 'error', data: null });
                    }
                });

                worker.postMessage(10 + i); // Отправляем возрастающий номер, начиная с 10
            })
        );
    }

    // Ожидаем выполнения всех worker и собираем результаты
    const workerResults = await Promise.all(workers);

    // Записываем результаты в массив
    workerResults.forEach(result => results.push(result));

    console.log(results);
};

await performCalculations();
