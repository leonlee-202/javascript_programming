const request = require('request')
const fs = require('fs');
const fetch = require('fetch');
request('https://www.lipsum.com/', function(url, filePath) {
         fetch(url);
        console.log (response.text());

        fs.writeFile("./lipsum.txt", filePath, body, (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else{
                console.log('file saved!');
            }
    });
       fs.readFile("./lipsum.txt", "utf-8", (error, data) =>{
        if (error) {
            console.log(error);
        } else{
            console.log(data);
        }
      });

});