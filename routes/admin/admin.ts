// /admin模块
import express from "express";
import { User } from "../../model/user";
import { News } from "../../model/news";
const route = express.Router();
// 连接数据库池
let db = require("../../database");

// 添加用户
route.get("/add/user", (req: any, res: any) => {
    const query = req.query as User;
    const user = {
        authority_id: query.authority_id,
        user_name: query.user_name,
        password: query.password,
        department_id: query.department_id,
    };
    const sql = `INSERT INTO (user_name, password, department_id, authority_id) user VALUES ('${user.user_name}','${user.password}','${user.department_id}','${user.authority_id}')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});
// 删除用户
route.get("/delete/user", (req: any, res) => {
    const query = req.query as User;
    const user_id = query.user_id;
    const sql = `DELETE FROM user WHERE user_id='${user_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 删除新闻
route.get("/delete/news", (req: any, res) => {
    const query = req.query as News;
    const news_id = query.news_id;
    const sql = `DELETE FROM news WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 添加新闻
route.get("/add/news", (req: any, res) => {
    const query = req.query as News;
    const news = {
        news_title: query.news_title,
        news_writer_id: query.news_writer_id,
        news_content: query.news_content,
        news_created_time: new Date().toString(),
    };
    const sql = `INSERT INTO (news_title, news_writer_id, news_content, news_praise_number, news_star_number, news_created_time) news VALUES ('${news.news_title}', '${news.news_writer_id}', '${news.news_content}', 0, 0, '${news.news_created_time}')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 查询所有用户
route.get("/search/user", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

// 更新用户
route.get("/update/user", (req: any, res) => {
    const query = req.query as User;

    const authority_id = query.authority_id;
    const user_name = query.user_name;
    const password = query.password;
    const department_id = query.department_id;
    const user_id = query.user_id;

    const sql = `UPDATE user SET user_name='${user_name}',password='${password}',authority_id='${authority_id}',department_id='${department_id}' WHERE user_id='${user_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 查询所有新闻
route.get("/search/news", (req, res) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

module.exports = route;
