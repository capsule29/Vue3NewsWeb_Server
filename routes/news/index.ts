import { News } from "../../model/news";

// /news模块
const express = require("express");
const router = express.Router();
// 连接数据库池
let db = require("../../database");

// 管理员查询所有新闻
router.get("/select/all", (req: any, res: any) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

// 用户查询能见新闻
router.get("/select/byUser", (req: any, res: any) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

// 以新闻ID查询新闻内容
router.get("/select/content", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const sql = `SELECT news_content FROM news WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            // const JSONResult = JSON.stringify(solution);
            // console.log(solution);
            res.json(solution[0].news_content);
        }
    });
});

router.get("/update/title", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const news_title = req.query.news_title;

    console.log(news_title);

    const sql = `UPDATE news SET news_title='${news_title}' WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            // const JSONResult = JSON.stringify(solution);
            res.json(solution);
        }
    });
});

// 新闻更新部门能见度
router.get("/update/dps", (req: any, res: any) => {
    const news_id: number = req.query.news_id;
    const news_dps: string = req.query.news_dps;

    const sql = `UPDATE news SET news_dps='${news_dps}' WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            // const JSONResult = JSON.stringify(solution);
            res.json(solution);
        }
    });
});

// 更新新闻内容
router.get("/update/content", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const news_content = req.query.news_content;

    const sql = `UPDATE news SET news_content='${news_content}' WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            // const JSONResult = JSON.stringify(solution);
            res.json(solution);
        }
    });
});

// news_id为news_id的点赞、新闻收藏数+1
router.get("/addreduce", (req: any, res: any) => {
    let what: string = req.query.what;
    let news_id: number = req.query.news_id;
    let is_add: string = req.query.is_add;

    const sql = `UPDATE news SET news_${what}_number=news_${what}_number${
        is_add == "true" ? "+1" : "-1"
    } WHERE news_id=${news_id}`;

    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.send("ok");
        }
    });
});

// 删除新闻
router.get("/delete", (req: any, res: any) => {
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
router.get("/add", (req: any, res: any) => {
    const query = req.query as News;
    const news = {
        news_title: query.news_title,
        news_writer_id: query.news_writer_id,
        news_content: query.news_content,
        news_created_time: new Date().toString(),
    };
    const sql = `INSERT INTO news (news_title, news_writer_id, news_content, news_praise_number, news_star_number, news_created_time) VALUES ('${news.news_title}', '${news.news_writer_id}', '${news.news_content}', 0, 0, '${news.news_created_time}')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json("ok");
        }
    });
});

module.exports = router;
