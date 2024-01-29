import fs from "fs";

const list = async () => {
    // implement function that prints all array of filenames from files folder into console
    // (if files folder doesn't exists Error with message FS operation failed must be thrown)
    fs.readdir('files', {}, (err, fileNames) => {
        if (err) throw Error('FS operation failed');
        console.log(fileNames);
    });
};

await list();