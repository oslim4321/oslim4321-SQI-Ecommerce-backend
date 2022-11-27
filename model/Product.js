const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        // unique: true,
        // required: [true, 'title must be provided'],
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        // required: [true, 'img must be provided'],
    },
    category: {
        type: Array,
        // required: [true, 'category must be provided'],
    },
    size: {
        type: Array,

    },
    price: {
        type: Number,
        // required: [true, 'price must be provided'],
    },
    color: {
        type: Array,
    },
    rating: {
        type: Array,
    },
    inStock: {
        type: Boolean,
        default: true
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('SqiProduct', productSchema)

