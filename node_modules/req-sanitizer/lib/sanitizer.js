'use strict';

var xssFilters = require('xss-filters');

module.exports = function(options) {
    
    return function(req, res, next) {
        req.body = req.body ? JSON.parse( xssFilters.inHTMLData( JSON.stringify( req.body ) ) ) : next();
        next();
    }
    
};
