import fs from "fs";

const read = async () => {
    // implement function that prints content of the fileToRead.txt into console
    // (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
    fs.readFile("files/fileToRead.txt", { encoding: 'utf8' }, (err, data) => {
        if (err) throw new Error("FS operation failed");
        console.log(data);
    })
};

await read();