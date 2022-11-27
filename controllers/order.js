const OrderSchema = require('../model/Order')



/* get the post order request an save to database */
module.exports.OrderPost = async (req, res) => {
    const Orders = req.body;
    (req.body, 'the body')
    try {
        const OrderSave = await OrderSchema.create(Orders)
        res.status(200).json(OrderSave)
            (OrderSave)
    } catch (error) {

        res.status(400).json('Cant Post Item')

    }
}


/* get single user Order */
module.exports.getSingleOrder = async (req, res) => {
    (req.userId)
    try {
        const cart = await OrderSchema.find({ userId: req.params.userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json('failed to get user order')

    }
}
/* get one Order */
module.exports.getOneOrder = async (req, res) => {

    try {
        const cart = await OrderSchema.find({ _id: req.params.id })
        res.status(200).json(cart)
        // (cart)
    } catch (error) {
        res.status(500).json('failed to get single order')
            (error)
    }
}

