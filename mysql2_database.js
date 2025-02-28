const mysql = require("mysql2");

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "corporate_news_release_system",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
    idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});
// // 关于连接池初始化，请参阅上文
// pool.query("SELECT `field` FROM `table`", function (err, rows, fields) {
//     // 查询解析时，连接会自动释放
// });

// // 简单查询
// pool.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function (err, results, fields) {
//         console.log(results); // 结果集
//         console.log(fields); // 额外的元数据（如果有的话）
//     },
// );

// // 使用占位符
// pool.query(
//     "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//     ["Page", 45],
//     function (err, results) {
//         console.log(results);
//     },
// );

////////////////////
// 对数据库进行增删改查操作的基础
function query(sql, callback) {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        else {
            connection.query(sql, (err, datas) => {
                if (err) throw err;
                callback(err, datas);
            });
        }
        connection.release();
    });
}

module.exports.query = query;
