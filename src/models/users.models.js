//* {
//*     id: 1,
//*     first_name: 'string',
//*     last_name: 'string',
//*     email: 'string',
//*     password: 'string',
//*     birthday: 'YYYY/MM/DD'
//* }

const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false
})

module.exports = Users;