/**
 * http://usejsdoc.org/
 */
var fs = require('fs');

var express = require('express');
var multer = require('multer');

var router = express.Router();
var upload = multer({dest: 'purchase.csv'});

module.exports = upload;