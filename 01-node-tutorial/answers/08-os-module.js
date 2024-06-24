const os = require('os');
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Home Directory:', os.homedir());