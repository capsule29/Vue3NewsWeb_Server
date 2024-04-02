// // /login模块
// import express from "express";
// import { User } from "../../model/user";
// const router = express.Router();
// // 连接数据库池
// // let db = require("../../database");

// // 用户登录
// router.get("/", (req: any, res: any) => {
//     const query = req.query;

//     const user: User = {};
//     user.user_name = query.user_name;
//     user.password = query.password;
//     user.authority_id = query.authority_id;

//     // 要加单引号
//     const sql = `SELECT * FROM user WHERE user_name='${user.user_name}' AND password='${user.password}' AND authority_id='${user.authority_id}'`;
//     db.query(sql, (err: any, solution: any[]) => {
//         if (err) {
//             throw err;
//         } else {
//             const user_data: User = {};
//             console.log(solution);

//             user_data.user_id = solution[0].user_id;
//             user_data.user_name = solution[0].user_name;
//             user_data.authority_id = solution[0].authority_id;
//             user_data.department_id = solution[0].department_id;

//             // 设置cookie
//             res.cookie("user_id", user_data.user_id);
//             res.cookie("user_name", user_data.user_name);
//             res.cookie("authority_id", user_data.authority_id);
//             res.cookie("department_id", user_data.department_id);

//             res.json(user_data);
//         }
//     });
// });
// module.exports = router;
