var express = require('express');
var url = require('url');
var router = express.Router();
var logger = require('../public/javascripts/logger.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    log("QueryParams\n"+JSON.stringify(getQueryParams(req), null, 4));
    log('\nRequest: ' + req.protocol + '://' + req.get('host') + req.originalUrl)
    log('\nHeaders:\n');
    log(JSON.stringify(req.headers, null, 4));

      res.render('index', {
        title: 'Nodejs Echo Server',
        queryParams: "\n"+JSON.stringify(getQueryParams(req), null, 4),
        request: req.protocol + '://' + req.get('host') + req.originalUrl,
        headers: "\n"+JSON.stringify(req.headers, null, 4)
      });
});

router.post('/', function(req, res, next) {
    log("QueryParams\n"+JSON.stringify(getQueryParams(req), null, 4));
    log('\nRequest: ' + req.protocol + '://' + req.get('host') + req.originalUrl)
    log('\nHeaders:\n');
    log(JSON.stringify(req.headers, null, 4));
    log(JSON.stringify(req.body, null, 4));

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

function log(message){
    logger.info(message);
}

module.exports = router;
