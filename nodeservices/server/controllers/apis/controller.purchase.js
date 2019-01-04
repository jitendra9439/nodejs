/**
 * http://usejsdoc.org/
 */
const
    express = require('express'),
    upload = require('../../services/uploadFile.js'),
	uploadService=require('../../services/purchase.js');
let router = express.Router();
	router.post('/uploadCsv', upload.single("uploadfile"),uploadService.uploadCsv);
	router.post('/uploadCsv',uploadService.uploadCsv);
	router.get('/purchase_order/all',uploadService.DisplayRecord);
module.exports = router;