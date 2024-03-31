// /admin模块
const express = require("express");
const route = express.Router();
// 连接数据库池
let db = require("../database");

const MD5 = require("crypto-js/md5");
/**
 * 添加用户
 * @param user_name
 * @param password
 */
route.get("/add/user", (req, res) => {
    const user_name = req.query.user_name;
    const password = MD5(MD5(req.query.password));
    const is_admin = req.query.is_admin;
    const sql = `INSERT INTO user (is_admin,user_name,password) VALUES ('${is_admin}','${user_name}','${password}')`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});
/**
 * 删除用户
 * @param user_id
 */
route.get("/delete/user", (req, res) => {
    const user_id = req.query.user_id;
    const sql = `DELETE FROM user WHERE user_id='${user_id}'`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

/**
 * 删除新闻
 * @param news_id
 */
route.get("/delete/news", (req, res) => {
    const news_id = req.query.news_id;
    const sql = ``;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

/**
 * 添加新闻
 * @param news_title
 * @param news_content
 */
route.get("/add/news", (req, res) => {
    const news_title = req.query.news_title;
    const news_content = req.query.news_content;
    const news_created_at = new Date().toString();
    const sql = `INSERT INTO news (news_title, news_content, news_created_at, news_praise_number, news_star_number) VALUES ('${news_title}', '${news_content}', '${news_created_at}', 0, 0)`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

/**
 * 查询所有用户
 */
route.get("/search/user", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

/**
 * 更新用户
 */
route.get("/update/user", (req, res) => {
    const user_id = req.query.user_id;
    const user_name = req.query.user_name;
    const password = req.query.password;
    const is_admin = req.query.is_admin;

    const sql = `UPDATE user SET user_name='${user_name}',password='${password}',is_admin='${is_admin}' WHERE user_id='${user_id}'`;
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

/**
 * 查询所有新闻
 */
route.get("/search/news", (req, res) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err, solution) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

module.exports = route;
