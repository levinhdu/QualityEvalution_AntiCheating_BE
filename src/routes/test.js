const express = require("express")
const route = express.Router()
const multer = require('multer');
const uploadImg = require('../app/model/firebase');
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})
const testController = require('../app/cotrollers/TestController');

route.get('/data', testController.getdata)
route.post('/create',upload.single('imagem'), uploadImg, testController.create)


module.exports = route;