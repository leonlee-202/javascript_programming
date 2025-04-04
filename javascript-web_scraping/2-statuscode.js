const request = require('request');


function getStatusCode(url){
    request.get(url, (error, response) => {
      if (error){
         console.error(error);
         return;
      } 
      console.log(response.statusCode);
    });
}
if (process.argv.length <3){
   console.error('Please provide a url');
   process.exit(1);
}
const url = process.argv[2];

getStatusCode(url);