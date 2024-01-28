/**
 * implement function that decompresses archive.gz back to the 
 * fileToCompress.txt with same content as before compression using zlib and Streams API
 */
import { access, constants, createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from "node:zlib";
import { fileURLToPath } from 'node:url';
import { dirname, normalize } from 'node:path';
const dir = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    // Write your code here 
    let gzfile = normalize(dir + '/files/archive.gz');
    access(gzfile, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            return createReadStream(gzfile)
                .pipe(createGunzip())
                .pipe(createWriteStream(normalize(dir + '/files/fileToCompress.txt')))
                .on('error', () => {
                    throw new Error('FS operation failed');
                });
        }
    });
};

await decompress();