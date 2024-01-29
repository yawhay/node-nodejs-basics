import zlib from "zlib";
import stream from "stream";
import fs from "fs";

const decompress = async () => {
    // implement function that decompresses archive.gz back to the fileToCompress.txt
    // with same content as before compression using zlib and Streams API
    const gunzip = zlib.createGunzip();

    const readStream = fs.createReadStream("files/archive.gz");
    const writeStream = fs.createWriteStream("files/fileToCompress.txt");

    await stream.promises.pipeline(readStream, gunzip, writeStream);
};

await decompress();