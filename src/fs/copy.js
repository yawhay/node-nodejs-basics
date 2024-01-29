import fs from "fs";

// 1. Create new folder else err
// 2. Scan old folder else err
// 3. Read files from old directory and write to new directory in cycle

const scanFolderCallback = (err, files) => {
    if (err) throw err;
    // cycle on files
    files.forEach(file => {
        // getting content file
        fs.readFile(`files/${file}`, {}, (err, data) => {
            if (err) throw new Error ('FS operation filed');

            // writing file
            fs.writeFile(`files_copy/${file}`, data, { flag: 'ax' }, (err) => {
                if (err) throw new Error ('FS operation filed');
            });
        })
    })
}
const copy = async () => {
    // implement function that copies folder files files with all its content
    // into folder files_copy at the same level
    // (if files folder doesn't exists or files_copy has already been created
    // Error with message FS operation failed must be thrown)

    // throw error if files_copy already exists and stop program
    fs.mkdir('files_copy', (err) => {
        if (err) throw new Error ('FS operation filed');
    })

    // run coping files if creating directory was success
    fs.readdir('files', scanFolderCallback);
};

await copy();
