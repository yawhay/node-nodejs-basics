import fs from "fs";
import stream from "stream";

const write = async () => {
    // implement function that writes process.stdin data
    // into file fileToWrite.txt content using Writable Stream
    await stream.promises.pipeline(process.stdin, fs.createWriteStream("files/fileToWrite.txt"));
};

await write();