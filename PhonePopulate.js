require('dotenv').config()
const fs = require('fs');
const connectDB = require('./db/connect')
const axios = require('axios')
// const productSchema = require('./model/Product')
const Accesories = require('./model/Accesories')

// console.log(process.env.MANGO_URL, 'mee')
const start = async () => {
    try {
        const doSom = async () => {
            // const res = await axios.get('https://fakestoreapi.com/products/');
            const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
            if (res.data) {

                let data = res.data.map((elem) => (
                    {
                        title: elem.name,
                        category: elem.brand,
                        image: elem.image_link,
                        // color: elem.product_colors,
                        description: elem.description,
                        price: elem.price,
                        rating: elem.rating
                    }

                ))
                await connectDB(process.env.MANGO_URL)
                await Accesories.deleteMany()
                await Accesories.create(data)
                console.log('all item populated')
            }

            process.exit(0)
        }
        doSom()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

start()
