const ProductSchema = require('../model/Product')
const Accesories = require('../model/Accesories')
// module.exports.NewItem = async (req, res) => {
//     const products = req.body;

//     try {
//         const Post = await ProductSchema.create(products)
//         res.status(200).json(Post)
//     } catch (error) {

//         res.status(400).json('CAnt Post Item')

//     }
// }

// module.exports.Update = async (req, res) => {
//     try {
//         const UpdatedProduct = await ProductSchema.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//         }
//         );

//         res.status(200).json(UpdatedProduct)
//     } catch (error) {

//     }
// }


// module.exports.delete = async (req, res) => {
//     try {
//         await ProductSchema.findByIdAndDelete(req.params.id)
//         res.status(200).json('user deleted successful')
//     } catch (error) {
//         res.status(500).json('failed to delete')

//     }
// }


/* get single product */
module.exports.getSingle = async (req, res) => {

    try {
        const data = await ProductSchema.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json('failed to get products')

    }
}


/* get all product */
module.exports.getAll = async (req, res) => {
    const { qnewProd, cats, sort } = req.query

    // const qnewProd = req.query.new;
    // const qCategory = req.query.category;
    // const qAccessory = req.query.Accessory;
    // const qwoman = req.query.Women;
    // const qMen = req.query.Men;
    // console.log(category, Accessory, Women, Men, qnewProd)

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    console.log(req.query)
    try {
        let products
        if (qnewProd) {
            products = await ProductSchema.find({ category: { "$in": ["men's clothing", "women's clothing"] } }).limit(10)
        }
        else if (cats) {
            products = await ProductSchema.find({ category: { "$in": [req.query.cats] } }).skip(skip).limit(limit)
        }
        /* send product by color pick */
        else if (req.query.color) {
            products = await ProductSchema.find({ color: { "$in": [req.query.color] } }).sort({ createdAt: -1 }).limit(limit)
        }
        /* send product by size pick */
        else if (req.query.size) {
            products = await ProductSchema.find({ size: { "$in": [req.query.size] } }).sort({ createdAt: -1 }).limit(limit)
        }
        else if (req.query.search) {
            let regex = [new RegExp(`^${req.query.search}$`, 'i')]
            products = await ProductSchema.find({
                "$or": [
                    { color: { "$in": regex } },
                    { title: { $regex: req.query.search } },
                    { category: { "$in": regex } },
                    { size: { "$in": regex } }
                ]

            }).sort({ createdAt: -1 })
        }
        else {
            products = await ProductSchema.find().skip(skip).limit(limit)
            // products = 'we doing thimgs'
        }
        /* sort product implementation */
        if (sort) {
            if ((sort === 'newest')) {
                products = await ProductSchema.find().sort({ createdAt: -1 }).limit(limit)
            }
            else if ((sort === 'oldest')) {
                products = await ProductSchema.find().sort({ createdAt: 1 }).limit(limit)
            }
            else if ((sort === 'asc')) {
                products = await ProductSchema.find().sort({ price: 1 }).limit(limit)
            }
            else {
                products = await ProductSchema.find().sort({ price: -1 }).limit(limit)
            }
        }


        res.status(200).json({ products, pageNum: page, total: products.length })
    } catch (error) {
        console.log(error)
        res.status(500).json('failed to get all products')

    }
}
