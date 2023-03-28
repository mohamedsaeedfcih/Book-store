const express= require('express')
const router = express.Router();
const bookctrl = require('../controller/book.controller')

router.get('/book',bookctrl.getBookList)
router.get('/book/details/:bookId',bookctrl.getBookDetails)
router.post('/book/save',bookctrl.savebook)
router.put('/book/update',bookctrl.updatebook)
router.delete('/book/delete/:bookId',bookctrl.deleteBook)




module.exports =router;