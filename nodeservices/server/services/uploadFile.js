/**
 * http://usejsdoc.org/
 */
const http = require('http');
const fs = require('fs');

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'purchase.csv' });
module.exports = upload;