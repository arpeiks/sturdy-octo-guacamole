//Step1:set up the file system
const fs = require('fs');


//Step2: create a readstream (to read from a file path) and writestream (to write to another file path) 
const readStream = fs.createReadStream('./docs/blog.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt');


//Step3a: read data from one file and write to another file
readStream.on('data', (chunk) => {
    console.log('.....NEW CHUNK.....');
    console.log(chunk.toString());
   writeStream.write('\n........WRITTEN CHUNK.......\n')
   writeStream.write(chunk);
});

// Alternative way to 3a
readStream.pipe(writeStream);

