const request = require('request')
const url = 'https://www.lipsum.com/'
const fs = require('fs');

function getfile(url){
    request.get(url, (error, response) => {
      if (error){
         console.error(error);
         return;
      } 
      console.log(response.body);
    });


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
};
 if (process.argv.length<3){
    console.error("Provide url");
    process.exit(1);
 };


getfile(url)