import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';


const op = Sequelize.Op;


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: {
        $and: op.and,
        $or: op.or,
        $eq: op.eq,
        $gt: op.gt,
        $lt: op.lt,
        $lte: op.lte,
        $like: op.like
    }
});

export default sequelize;
