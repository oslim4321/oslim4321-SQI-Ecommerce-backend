const mongoose = require('mongoose')

const accesorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: Array,
    },
    price: {
        type: Number,
    },
    color: {
        type: Array,
    },
    rating: {
        type: Number,
    },
    inStock: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('SqiMakeupProduct', accesorySchema)

