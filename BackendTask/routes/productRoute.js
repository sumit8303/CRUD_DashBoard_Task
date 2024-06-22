const express = require('express')
const uploads = require('../multerConfig.js')
const router = express.Router()
const productController = require('../controller/productController.js')

router.post('/saveProduct',uploads.single('image'), productController.saveProduct)

router.get('/getProduct', productController.getProduct)

router.get('/getCategory', productController.getCategory)

router.post('/addCategory', productController.addCategory)

router.get('/getDataById/:id', productController.getProductById)

router.delete('/deleteProduct/:id', productController.deleteProduct)
router.put('/updateProduct/:id',productController.updateProduct)
module.exports = router