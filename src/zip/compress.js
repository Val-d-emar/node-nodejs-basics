/**
 * implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
 */
import { access, constants, createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from "node:zlib";
import { fileURLToPath } from 'node:url';
import { dirname, normalize } from 'node:path';
const dir = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    // Write your code here 
    let infile = normalize(dir + '/files/fileToCompress.txt');
    access(infile, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            return createReadStream(infile)
                .pipe(createGzip())
                .pipe(createWriteStream(normalize(dir + '/files/archive.gz')))
                .on('error', () => {
                    throw new Error('FS operation failed');
                });
        }
    });

};

await compress();