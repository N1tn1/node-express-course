const {writeFile, readFile} = require("fs").promises;
writeFile('temp.txt', 'Checkout my line 1')
.then(() => {
    return writeFile ('temp.txt', 'Checkout my line 2');
})
.then(() => {
    return writeFile('temp.txt', 'Checkout my line 3');
})
.then(() => {
    return readFile('temp.txt', 'utf8');
})
.then((data) => {
    console.log('File Contents:');
    console.log(data);
})
.catch ((err) => {
    console.error('Error occurred:', err);
})
