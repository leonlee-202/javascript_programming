const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach(film => {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
            count++;
        }
    });

    console.log('Number of movies with Wedge Antilles:', count);
    console.log(response.movie);
});