const UserSchema = require('../model/User')


/* get single user */
module.exports.getSingle = async (req, res) => {

    try {
        const data = await UserSchema.findById(req.params.id)
        res.status(200).json({ data: 'user is valid' })
    } catch (error) {
        res.status(500).json('failed to get user')

    }
}

