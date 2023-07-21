import { Router } from "express";
import ProductManager from '../manager/product.manager.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', async (req, res) => {
    const products = await productManager.list()
    res.render('home', { products })
})

router.get('/realTimeProducts', async (req, res) => {
    const products = await productManager.list()
    res.render('realTimeProducts', { products })
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})


router.post('/form-products', async (req, res) => {
    const data = req.body
    const result = await productManager.create(data)

    res.redirect('/')
})

export default router