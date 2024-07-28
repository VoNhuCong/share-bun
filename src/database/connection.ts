import { Sequelize } from 'sequelize-typescript';

const Connection = new Sequelize({
    database: 'onlybun',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    models: [__dirname + '/models'],
});

(async () => {
    try {
        Connection.authenticate()
        console.log('Kết nối cơ sở dữ liệu thành công')
    } catch (error) {
        console.log(error)
        console.log('Kết nối cơ sở dữ liệu không thành công')
    }
})();

export default Connection