const repo = require('../repositories/users.respository')

module.exports = {
    listUsers = async (req,res)=>{
        try {
            const users = await repo.getUsers()
            return res.status(200).json(users)        
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}