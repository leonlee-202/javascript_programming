const request = require('request');


const movieId = process.argv[2];



const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

function getmovie(url){
    request.get(url, (error, response) => {
      if (error){
         console.error(error);
         return;
      } 
      console.log(response.movie);
    });
};

if (process.argv.length <3){
    console.error('Movie id required');
    process.exit(1);
 }

getmovie(url);

