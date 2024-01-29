import { writeFile } from 'fs'
const create = async () => {
    // implement function that creates new file fresh.txt with content
    // I am fresh and young inside of the files folder
    // (if file already exists Error with message FS operation failed must be thrown)
    writeFile('files/fresh.txt', 'I am fresh and young', { flag: 'ax' }, (err) => {
        if (err) throw new Error ('FS operation filed');
        console.log('The file has been saved!');
    });

};

await create();