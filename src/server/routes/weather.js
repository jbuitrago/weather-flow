var express = require('express');
var router = express.Router();
var request = require('request');

// GET catalog home page.
router.get('/', function (req, res) {
   res.send('Hello World!')
})


  router.get('/location', (req, res) => {

      res.send({ express : 1});
    /*const options = {
        url: 'https://www.reddit.com/r/funny.json',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };

    request('https://www.reddit.com/r/funny.json', function(err, res, body) {
        let json = JSON.parse(body);
        console.log(json);
          res.send(json);
    });*/




  });




module.exports = router;
