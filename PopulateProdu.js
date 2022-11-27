require('dotenv').config()
const fs = require('fs');
const connectDB = require('./db/connect')
const fetch = require('node-fetch');
// const productSchema = require('./model/Product')
// const Accesories = require('./model/Accesories')

// (process.env.MANGO_URL, 'mee')
const start = async () => {
    let Phones = []
    try {
        const doSom = async () => {
            // const res = await axios.get('https://fakestoreapi.com/products/');
            // const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
            const url = 'https://real-time-product-search.p.rapidapi.com/search?q=iPhone&country=us&language=en';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c93b77eedfmshf7aaa96cb505004p182814jsn888a17b9ba38',
                    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => (json.data))
                .catch(err => console.error('error:' + err));
            // if (Phones) {
            //     Phones.map((elem) => (
            //         (elem)
            // {
            //     title: elem.name,
            //     category: elem.brand,
            //     image: elem.image_link,
            //     // color: elem.product_colors,
            //     description: elem.description,
            //     price: elem.price,
            //     rating: elem.rating
            // }

            // ))
            // await connectDB(process.env.MANGO_URL)
            // // await Accesories.deleteMany()
            // await productSchema.create(data)
            // ('all item populated')

            // }

            process.exit(0)
        }
        doSom()

    } catch (error) {
        (error)
        process.exit(1)
    }

}

start()
