import fs from "fs";

const remove = async () => {
    // implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt
    // Error with message FS operation failed must be thrown)
    fs.rm('files/fileToRemove.txt', (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await remove();