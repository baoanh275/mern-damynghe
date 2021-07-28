const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)


router.route('/homeproducts')
    .get(productCtrl.getProductsHome)

router.route('/search')
    .get(productCtrl.searchProducts)

router.route('/allproducts')
    .get(productCtrl.getAllProducts)
    
router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)



module.exports = router