/*!
 * Connect - whitelist
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 */

/**
 * Whitelist:
 *
 * Only allow request from a given list of IP addresses
 *
 * Examples:
 *     
 *     connect()
 *       .use(require('connect-whitelist')(["127.0.0.1"]))
 *
 * @param {Array} list 
 * // IP Addresses allowd access to your application
 * @param {String} level 
 * @return {Function}
 * @api public
 */
module.exports = function whitelist(list){
    if(typeof list === 'string') list = [list]
    return function whitelist(req,res,next){
        if(!~list.indexOf(req.connection.remoteAddress)){
            res.send(404);
        }else{
           next();
        }
    };
};