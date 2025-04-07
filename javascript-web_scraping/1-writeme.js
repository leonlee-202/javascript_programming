const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

if (process.argv.length <3){
    console.error('Provide filepath');
    process.exit(1);
 }
 

fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
});
