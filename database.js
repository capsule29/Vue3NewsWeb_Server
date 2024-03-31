var mysql = require("mysql");

// 建立链接池
var pool = mysql.createPool({
    host: "localhost",
    // port: 3306,
    user: "root",
    password: "Capsule@297814_",
    database: "corporate_news_release_system",
});

// 对数据库进行增删改查操作的基础
function query(sql, callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            connection.query(sql, (err, datas) => {
                if (err) {
                    throw err;
                }
                callback(err, datas);
                connection.release();
            });
        }
    });
}

module.exports.query = query;
