import { Router } from "express";
import ProductManager from '../manager/product.manager.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', (req, res) => {
    res.render('index', {})
})

router.get('/products', async (req, res) => {
    const products = await productManager.list()
    res.render('products', { products })
})

router.get('/products-realtime', async (req, res) => {
    const products = await productManager.list()
    res.render('products_realtime', { products })
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})

router.get('/', (req, res) => {
    res.render('home', {})
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts', {})
})

router.post('/form-products', async (req, res) => {
    const data = req.body
    const result = await productManager.create(data)

    res.redirect('/products')
})

export default router