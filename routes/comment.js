// /comment
const express = require("express");
const route = express.Router();
// 连接数据库池
let db = require("../database");

/**
 * 以news_id查询所有相关评论
 * @param news_id
 */
route.get("/select", (req, res) => {
    const news_id = req.query.news_id;
    const sql = `SELECT * FROM comment WHERE news_id=${news_id}`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw error;
        } else {
            res.json(solution);
        }
    });
});
/**
 * 添加评论
 * @param news_id
 * @param user_id
 * @param comment_content
 */
route.get("/add", (req, res) => {
    const news_id = req.query.news_id;
    const user_id = req.query.user_id;
    const comment_content = req.query.comment_content;
    const comment_created_at = new Date().toString();
    const sql = `INSERT INTO comment (user_id,news_id,comment_content,comment_created_at,comment_praise_number) VALUES (${user_id},${news_id},'${comment_content}','${comment_created_at}',0)`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw error;
        } else {
            res.json("ok");
        }
    });
});
module.exports = route;
