const express = require('express')
const productRoute = express.Router()
const product = require('../controllers/product')
const Stripe = require('../controllers/Stripe')
// const { varifytoken, varifyTokenAndAutorization, varifyTokenAndAdmin } = require('../middleware/VarifyToken')


productRoute.post('/stripe', Stripe.Stripe)
productRoute.get('/:id', product.getSingle)






module.exports = productRoute