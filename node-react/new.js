const fs = require('fs');

fs.writeFile('./sample1.txt', 'hi how are you', 'utf-8', (err) => {
    if (err) {
        console.log(err);
    } else {
        fs.readFile('./sample1.txt','utf-8',(err,data)=>{
            if(err)
                console.log(err)
            else
                console.log(data)
        })
    }
});
