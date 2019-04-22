const zlib = require('zlib');
const fs = require('fs');

//create compressor
const gzip = zlib.createGzip();
//create inputstream
const inp = fs.createReadStream('./big.file');
//create outputstream
const out = fs.createWriteStream('CompressedBigFile.txt.gz');
//read-compress-write
inp.pipe(gzip).pipe(out);