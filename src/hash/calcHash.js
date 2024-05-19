import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
const calculateHash = async () => {
    const filePath = path.join('C:/RIS/mitso-nodejs-basic/src/hash/files', 'fileToCalculateHashFor.txt');
    
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);
        const hex = hashSum.digest('hex');
        console.log(`SHA256 hash of the file is: ${hex}`);
    } catch (error) {
        console.error('Error calculating hash:', error);
    }
};

await calculateHash();