// /comment
import express = require("express");
const router = express.Router();

import { News } from "../../model/news";
import { Comment } from "../../model/comment";
// 连接数据库池
let db = require("../../database");

// 以news_id查询所有相关评论
router.get("/select", (req: any, res: any) => {
    const query = req.query as News;
    const news_id = query.news_id;
    const sql = `SELECT * FROM comment WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});
// 添加评论
router.get("/add", (req: any, res: any) => {
    const query = req.query as Comment;

    const user_id = query.user_id;
    const news_id = query.news_id;
    const comment_content = query.comment_content;
    const comment_created_at = new Date().toString();
    // 点赞数0
    const sql = `INSERT INTO comment (user_id, news_id, comment_content, comment_created_at,comment_praise_number) VALUES (${user_id},${news_id},'${comment_content}','${comment_created_at}',0)`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});
module.exports = router;
