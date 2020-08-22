const fs = require('fs');

fs.writeFile(`${__dirname}/plural.json`, JSON.stringify(13), (error) => error);
