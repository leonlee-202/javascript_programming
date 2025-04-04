const fs = require("node:fs");

//refactor the code to add filePath and content to argv



fs.writeFile("./js.txt", "Hello World!", (err) =>{
    if (err) {
        console.log(err);
    } else{
        console.log("File written");
    }
});

fs.readFile("./js.txt", "utf-8", (error, data) =>{
    if (error) {
        console.log(error);
    } else{
        console.log(data);
    }
});