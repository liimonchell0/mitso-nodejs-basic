import { Transform } from 'stream';

class ReverseTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        // Переворачиваем строку
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
    }
}

const transform = async () => {
    const reverseTransform = new ReverseTransform();

    // Подключаем потоки: stdin -> transform -> stdout
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();