// /login模块
import express from "express";
import { User } from "../../model/user";
const route = express.Router();
// 连接数据库池
let db = require("../../database");

// 用户登录
route.get("/", (req: any, res) => {
    const query = req.query as User;

    const user_name = query.user_name;
    const password = query.password;
    const authority_id = query.authority_id;

    // 要加单引号
    const sql = `SELECT * FROM user WHERE user_name='${user_name}' AND password='${password}' AND is_admin='${authority_id}'`;
    db.query(sql, (err: any, solution: any[]) => {
        if (err) {
            throw err;
        } else {
            const sql_data = solution[0];
            const user_data: User = {};
            user_data.user_id = sql_data.user_id;
            user_data.user_name = sql_data.user_name;
            user_data.authority_id = sql_data.authority_id;
            user_data.department_id = sql_data.department_id;

            // 设置cookie
            res.cookie("user_id", user_data.user_id);
            res.cookie("user_name", user_data.user_name);
            res.cookie("authority_id", user_data.authority_id);
            res.cookie("department_id", user_data.department_id);

            res.json(user_data);
        }
    });
});
module.exports = route;
