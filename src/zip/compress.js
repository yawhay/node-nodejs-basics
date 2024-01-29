import zlib from "zlib";
import stream from "stream";
import fs from "fs";

const compress = async () => {
    // implement function that compresses file fileToCompress.txt to archive.gz
    // using zlib and Streams API
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream("files/fileToCompress.txt");
    const writeStream = fs.createWriteStream("files/archive.gz");

    await stream.promises.pipeline(readStream, gzip, writeStream);
};

await compress();