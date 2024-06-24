const { writeFile } = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "temporary", "output.txt");
console.log("at start");
// First writeFile call
writeFile(filePath, "This is line 1\n", (err1) => {
    console.log("at point 1");
    if (err1) {
        console.error("Error writing line 1:", err1);
    } else {
        console.log("Line 1 has been written.");

        // Second writeFile call
        writeFile(filePath, "This is line 2\n", (err2) => {
            console.log("at point 2");
            if (err2) {
                console.error("Error writing line 2:", err2);
            } else {
                console.log("Line 2 has been written.");

                console.log("at end");
            }
        });
    }
});