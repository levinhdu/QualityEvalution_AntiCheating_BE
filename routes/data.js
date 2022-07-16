const express = require("express")
const route = express.Router()

const dataCtrl = require('../api/controller/dataCtrl');

route.get('/getdata', dataCtrl.getdata)
route.get('/getcourse/:nameTeacher', dataCtrl.getCourse)
route.post('/data', dataCtrl.create)

module.exports = route;