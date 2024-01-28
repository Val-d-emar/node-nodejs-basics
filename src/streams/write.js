/**
 * implement function that writes process.stdin data into file 
 * fileToWrite.txt content using Writable Stream
 */
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { fileURLToPath } from 'node:url';
import { dirname, normalize } from 'node:path';
const dir = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    // Write your code here 
    return stdin.pipe(createWriteStream(normalize(dir + '/files/fileToWrite.txt'))); 
};

await write();