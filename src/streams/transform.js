import stream from "stream";

const transform = async () => {
    // transform.js - implement function that reads data from process.stdin,
    // reverses text using Transform Stream
    // and then writes it into process.stdout

    const reverse = new stream.Transform({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        },
    });

    await stream.promises.pipeline(process.stdin, reverse, process.stdout);
};

await transform();