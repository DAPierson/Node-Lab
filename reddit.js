let path = require('path');

let fs = require('fs');

let request = require('request');

let redditPath = path.join(__dirname, 'popular-articles.json');



request('https://reddit.com/r/popular.json', (err, data, body) => {
    if (err) console.log(err);

   let postArray = JSON.parse(body).data.children.map((items) => {

        return {
            author : items.data.author,
            title : items.data.title,
            url : items.data.url,
        }
        
    })
   
   let postString =JSON.stringify(postArray, null, 2);

     fs.writeFile(redditPath,postString, (err)=>{
         if (err)console.log(err);


     })
})




