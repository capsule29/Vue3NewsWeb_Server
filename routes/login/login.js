// /login模块
const express = require("express");
const route = express.Router();
// 连接数据库池
let db = require("../../database");

/**
 * 用户登录
 * @param user_name
 * @param password
 * @param is_admin
 */
route.get("/", (req, res) => {
    const user_name = req.query.user_name;
    const password = req.query.password;
    const is_admin = req.query.is_admin;

    // 要加单引号
    const sql = `SELECT * FROM user WHERE user_name='${user_name}' AND password='${password}' AND is_admin='${is_admin}'`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            const sql_data = solution[0];
            const user_data = {};
            user_data.user_id = sql_data.user_id;
            user_data.user_name = sql_data.user_name;
            user_data.is_admin = sql_data.is_admin;

            // 设置cookie
            res.cookie("user_id", user_data.user_id);
            res.cookie("user_name", user_data.user_name);
            res.cookie("is_admin", user_data.is_admin);

            res.json(user_data);
        }
    });
});
module.exports = route;
