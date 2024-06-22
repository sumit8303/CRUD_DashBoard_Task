const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController.js')

router.post('/saveCustomer', customerController.saveCustomer)

router.get('/getCustomer', customerController.getCustomer)

router.get('/getCustomerById/:id', customerController.getCustomerById)

router.delete('/deleteCustomer/:id', customerController.deleteCustomer)

router.put('/updateCustomer/:id', customerController.updateCustomer)

module.exports = router