/**
 * implement function that deletes file fileToRemove.txt 
 * (if there's no file fileToRemove.txt Error with message FS 
*/
import { unlink } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, normalize } from 'node:path';
const dir = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    // Write your code here 
    let src = normalize(dir + '/files/fileToRemove.txt');
    unlink(src, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw err;
            }            
        }
    });
};

await remove();
