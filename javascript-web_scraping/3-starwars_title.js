const request = require('request');


const movieId = process.argv[2];

if (!movieId) {
    console.log('3');
    process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    if (response.statusCode !== 200) {
        console.error(`Failed to fetch movie. Status code: ${response.statusCode}`);
        return;
    }
    
    try {
        const data = JSON.parse(body);
        console.log(data.title);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});


