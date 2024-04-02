// // /news模块
// const express = require("express");
// const router = express.Router();
// // 连接数据库池
// let db = require("../../database");

// // 查询所有新闻
// router.get("/select", (req: any, res: any) => {
//     const sql = "SELECT * FROM news";
//     db.query(sql, (err: any, solution: any) => {
//         if (err) {
//             throw err;
//         } else {
//             // const JSONResult = JSON.stringify(solution);
//             res.json(solution);
//         }
//     });
// });

// // news_id为news_id的点赞、新闻收藏数+1
// router.get("/addreduce", (req: any, res: any) => {
//     let what: string = req.query.what;
//     let news_id: number = req.query.news_id;
//     let is_add: string = req.query.is_add;

//     const sql = `UPDATE news SET news_${what}_number=news_${what}_number${
//         is_add == "true" ? "+1" : "-1"
//     } WHERE news_id=${news_id}`;

//     db.query(sql, (err: any, solution: any) => {
//         if (err) {
//             throw err;
//         } else {
//             res.send("ok");
//         }
//     });
// });

// module.exports = router;
