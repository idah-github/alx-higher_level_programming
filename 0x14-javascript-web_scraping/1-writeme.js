t fs = require('fs');

const filepath = process.argv[2];

// The second argument is the string to write
const string = process.argv[3];

// write to file
fs.writeFile(filepath, string, 'utf8', err=> {
  if (err)
    console.error(err);
)};
  
