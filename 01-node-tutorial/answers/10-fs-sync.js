const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');
const lines = [
    'First line\n',
    'Second line\n',
    'Third line\n'
];
// Write lines to file using writeFileSync
try {
    fs.writeFileSync(filePath, lines[0]);
    for (let i = 1; i < lines.length; i++) {
        fs.writeFileSync(filePath, lines[i], { flag: 'a' });
    }

    console.log('File written successfully.');
} catch (err) {
    console.error('Error writing file:', err);
}
// Read file using readFileSync
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File contents:');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
}