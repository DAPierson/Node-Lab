let path = require('path');

let fs = require('fs')

let request = require('request');



request(' https://reddit.com/r/popular.json', (err, data, body) => {
    if (err) console.log(err);


    let imgArray = JSON.parse(body).data.children.map((items) => {

        return {
            id: items.data.id,
            url: items.data.url,
        }

    })
    imgArray.map((items) => {
        if (path.extname(items.url) === '.jpg') {
            let downloadPath = path.join(__dirname, `downloads/${items.id}.jpg`);

            const options = {
                url: `${items.url}`,
                encoding: null
            };

            request(options, function (err, res, body) {
                fs.writeFileSync(downloadPath, body);
            });

        }



    })


})