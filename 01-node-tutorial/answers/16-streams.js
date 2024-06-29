const {createReadStream} = require('fs');
const stream = createReadStream('../content/big.txt', {encoding: 'utf8', highWaterMark: 200});
let counter = 0;
stream.on('data', (chunk) => {
    counter++;
    console.log(`Chunk ${counter} received:`);
    console.log(chunk);
});
stream.on('end', () => {
    console.log('\n Total number of chunks received:', counter);
    console.log('Stream reading complete.');
});
stream.on('error', (err) => 
{
    console.log('Error occurred in reading:');
    console.log(err)
});