let path = require('path');

let fs = require('fs');

let chirpPath = path.join(__dirname, 'chirps.json');

let chirpArray = [
    {
    chirp : 'This is the first chirp',
},
{
    chirp : 'This is the second chirp',
},
{
    chirp : 'This is the third chirp',
},
{
    chirp : 'This is the fourth chirp',
},
{
    chirp : 'This is the fifth chirp'
},
]

let chirps =JSON.stringify(chirpArray)

fs.writeFile(chirpPath,chirps, (err)=>{
    if(err)console.log(err);
    
    fs.readFile(chirpPath,{
        encoding: "UTF-8"
    },(err,chirps)=> {
        console.log(chirps);
    }  )

});


