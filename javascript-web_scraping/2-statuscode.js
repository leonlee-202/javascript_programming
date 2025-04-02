const url = 'https://bingx.com/';

function getStatusCode(url){
    fetch(url)
     .then(response=>{
        console.log(`code:<status code>: ${response.status}`);
    })
     .catch(error =>{
        console.error('Error', error);
     });
}

getStatusCode(url);