const parseArgs = () => {
    // implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2,
    // you don't need to validate it) and prints them to the console
    // in the format propName is value, prop2Name is value2
    let result = '';
    const keys = process.argv.filter(x => x.match(/^--/))
    keys.forEach((key, index) => {
        const idxInArgv = process.argv.indexOf(key);
        const value = process.argv[idxInArgv + 1];
        if (index !== 0) result = result + ', '
        result = result + `${key.slice(2)} is ${value}`
    })
    console.log(result);
};

parseArgs();