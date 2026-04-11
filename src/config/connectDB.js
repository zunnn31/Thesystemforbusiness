const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('Zunnn31', 'root', '3187', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/tmp/mysql.sock'
    },
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;