const express = require('express')
const OrderRoute = express.Router()
const Order = require('../controllers/order')
const { varifyTokenAndAutorization, varifytoken } = require('../middleware/VarifyToken')


OrderRoute.get('/:userId', varifyTokenAndAutorization, Order.getSingleOrder)
OrderRoute.post('/', varifytoken, Order.OrderPost);
OrderRoute.get('/singleOrderOne/:id', varifytoken, Order.getOneOrder)





module.exports = OrderRoute