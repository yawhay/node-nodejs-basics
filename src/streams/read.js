import fs from "fs";
import stream from "stream";

const read = async () => {
    // implement function that reads file fileToRead.txt content
    // using Readable Stream and prints it's content into process.stdout
    await stream.promises.pipeline(fs.createReadStream('files/fileToRead.txt'), process.stdout);
};

await read();