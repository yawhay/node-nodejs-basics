import fs from "fs";
import crypto from "crypto";
const calculateHash = async () => {
    // implement function that calculates SHA256 hash
    // for file fileToCalculateHashFor.txt and logs it into console
    // as hex using Streams API
    fs.readFile("files/fileToCalculateHashFor.txt", { encoding: 'utf8' }, (err, data) => {
        if (err) throw new Error("FS operation failed");
        const hash = crypto.createHash('sha256').update(data)
        console.log(hash.digest('hex'))
    })
};

await calculateHash();