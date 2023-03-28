const express= require('express')
const router = express.Router();
const storectrl = require('../controller/store.controller')

router.get('/store',storectrl.getstorelist)
router.post('/store/save',storectrl.saveStore)




module.exports =router;
