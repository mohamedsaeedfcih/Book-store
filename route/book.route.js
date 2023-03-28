const express= require('express')
const router = express.Router();
const bookctrl = require('../controller/book.controller')

router.get('/book',bookctrl.getbooklist)
router.get('/book/details/:bookid',bookctrl.getbookdetailslist)
router.post('/book/save',bookctrl.savebook)




module.exports =router;