const db = require('../models/index')
const {Op} = require ('sequelize')

module.exports = {
    getUsers : () => {
        return db.User.findAll({
            attributes: ["username", "email"],
            where:{
                deletedAt:{ [Op.is] : null }
            },
            include: [{ model: db.Role, as: 'role', attributes:["name"] }]
        })
    }
}