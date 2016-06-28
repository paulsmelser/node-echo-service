var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("QueryParams\n"+JSON.stringify(getQueryParams(req), null, 4));
    console.log('\nRequest: ' + req.protocol + '://' + req.get('host') + req.originalUrl)
    console.log('\nHeaders:\n');
    console.log(JSON.stringify(req.headers, null, 4));

      res.render('index', {
        title: 'Nodejs Echo Server',
        queryParams: "\n"+JSON.stringify(getQueryParams(req), null, 4),
        request: req.protocol + '://' + req.get('host') + req.originalUrl,
        headers: "\n"+JSON.stringify(req.headers, null, 4)
      });
});

router.post('/', function(req, res, next) {
    console.log("QueryParams\n"+JSON.stringify(getQueryParams(req), null, 4));
    console.log('\nRequest: ' + req.protocol + '://' + req.get('host') + req.originalUrl)
    console.log('\nHeaders:\n');
    console.log(JSON.stringify(req.headers, null, 4));
    console.log(JSON.stringify(req.body, null, 4));

    res.render('index', {
        title: 'Nodejs Echo Server',
        queryParams: "\n"+JSON.stringify(getQueryParams(req), null, 4),
        request: req.protocol + '://' + req.get('host') + req.originalUrl,
        headers: "\n"+JSON.stringify(req.headers, null, 4),
        body: "\n"+JSON.stringify(req.body, null, 4)
    });
});

function getQueryParams(request){
  var url_parts = url.parse(request.url, true);
  return url_parts.query;
}



module.exports = router;
