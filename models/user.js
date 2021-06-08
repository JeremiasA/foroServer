const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{

    class User extends Model {
        static associate(models) {
            User.belongsTo(models.Role, {as: 'role'});
        }
    }
    
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isAlphanumeric:{
                    msg: "Username only allows letters and numbers."
                },
                notNull:{
                    msg: "Username must be provided."
                },
                notEmpty:{
                    msg: "Username can't be empty."
                },
                len: {
                    args: [7,13],
                    msg: "Username length must be between 6 and 12."
                }       
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail:{
                    msg: "Email format isn't correct."
                },
                notNull:{
                    msg: "Email must be provided."
                },
                notEmpty:{
                    msg: "Email can't be empty."
                }
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Password must be provided."
                },
                notEmpty:{
                    msg: "Empty password can't be saved in database."
                }
            }
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Role',
              key: 'id'
            }
        },
        deletedAt:{
            type: DataTypes.DATE,
            validate:{
                isDate:{
                    msg: "Must be an valid date."
                }
            }
        }
    },
        {
        sequelize, 
        modelName: 'User' 
    });
    return User;
}