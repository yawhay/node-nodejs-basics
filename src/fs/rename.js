import fs from "fs";

const rename = async () => {
    // implement function that renames file wrongFilename.txt
    // to properFilename with extension .md
    // (if there's no file wrongFilename.txt or properFilename.md already exists
    // Error with message FS operation failed must be thrown)
    fs.rename('files/wrongFilename.txt', 'files/properFilename.md', (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await rename();