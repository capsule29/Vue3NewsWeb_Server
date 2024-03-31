// /news模块
const express = require("express");
const route = express.Router();
// 连接数据库池
let db = require("../database");

/**
 * 查询所有新闻
 */
route.get("/select", (req, res) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err, solution) => {
        if (err) {
            throw error;
        } else {
            // const JSONResult = JSON.stringify(solution);
            res.json(solution);
        }
    });
});

/**
 * news_id为news_id的点赞、新闻收藏数+1
 * @param what  enum('star', 'praise')
 * @param news_id
 * @param is_add
 */
route.get("/addreduce", (req, res) => {
    let what = req.query.what;
    let news_id = req.query.news_id;
    let is_add = req.query.is_add;

    const sql = `UPDATE news SET news_${what}_number=news_${what}_number${
        is_add == "true" ? "+1" : "-1"
    } WHERE news_id=${news_id}`;

    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.send("ok");
        }
    });
});

module.exports = route;
