var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
        new winston.transports.File({ filename: './debug.log', json: false, timestamp: true  })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: './exceptions.log', json: false, timestamp: true  })
    ],
    exitOnError: false
});

module.exports = logger;