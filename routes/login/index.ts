// /login模块
import express from "express";
import { User } from "../../model/user";
const router = express.Router();
// 连接数据库池
let db = require("../../database");

// 用户登录
router.get("/", (req: any, res: any) => {
    const user: User = req.query;

    // user.user_name = query.user_name;
    // user.password = query.password;
    // user.authority_id = query.authority_id;

    // 要加单引号
    const sql = `SELECT user.*,department.* FROM user,department WHERE user.user_name='${user.user_name}' AND user.password='${user.password}' AND user.authority_id='${user.authority_id}' AND user.department_id=department.department_id`;
    db.query(sql, (err: any, solution: any[]) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            // console.log(solution);
            // 设置cookie
            res.cookie("user_id", solution[0].user_id);
            res.cookie("user_name", solution[0].user_name);
            res.cookie("authority_id", solution[0].authority_id);
            res.cookie("department_id", solution[0].department_id);
            res.cookie("department_name", solution[0].department_name);
            res.json("ok");
        }
    });
});
module.exports = router;
