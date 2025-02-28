// /comment
import express = require("express");
const router = express.Router();

// 连接数据库池
const db = require("../../mysql2_database");

// 以news_id查询所有相关评论
router.get("/select/byId", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const sql = `SELECT comment.*,user.user_name FROM comment,user WHERE comment.news_id='${news_id}' AND comment.user_id=user.user_id`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution);
        }
    });
});
// 添加评论
router.get("/add", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const user_id = req.query.user_id;
    const comment_content = req.query.comment_content;
    const comment_created_time = new Date().toString();
    // 点赞数0
    const sql = `INSERT INTO comment (user_id, news_id, comment_content, comment_created_time,comment_praise_number) VALUES (${user_id},${news_id},'${comment_content}','${comment_created_time}',0)`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/delete", (req: any, res: any) => {
    const comment_id = req.query.comment_id;
    const sql = `DELETE FROM comment WHERE comment_id=${comment_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/praise", (req: any, res: any) => {
    const comment_id = req.query.comment_id;
    const sql = `UPDATE comment SET comment_praise_number=comment_praise_number+1 WHERE comment_id=${comment_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/depraise", (req: any, res: any) => {
    const comment_id = req.query.comment_id;
    const sql = `UPDATE comment SET comment_praise_number=comment_praise_number-1 WHERE comment_id=${comment_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            // throw err;
        } else {
            res.json("ok");
        }
    });
});
module.exports = router;
