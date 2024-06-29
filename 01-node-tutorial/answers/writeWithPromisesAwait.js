const {writeFile, readFile} = require("fs").promises;
const writer = async() => {
    try 
    {
        await writeFile('temp.txt', 'This is line 1\n This is line 2\n This is line 3\n');
        //console.log('File has been written successfully');

        await reader();
    }
    catch(err)
    {
        console.log("An error occurred:", err);
    }
}

const reader = async() => {
    try {
        const data = await readFile('temp.txt', 'utf8');
        console.log('File contents:');
        console.log(data);
    }
    catch(err)
    {
        console.log("An error occurred:", err);
    }
}
writer();