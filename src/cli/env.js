const parseEnv = () => {
    // implement function that parses environment variables
    // with prefix RSS_ and prints them to the console
    // in the format RSS_name1=value1; RSS_name2=value2
    let result = '';
    const keys = Object.keys(process.env).filter(x => x.match(/^RSS/i))
    keys.forEach((key, index) => {
        if (index !== 0) result = result + '; '
        result = result + `${key}=${process.env[key]}`
    });
    console.log(result)
};

parseEnv();