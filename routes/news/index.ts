import { News } from "../../model/news";

// /news模块
const express = require("express");
const router = express.Router();
// 连接数据库池
let db = require("../../database");

// 管理员查询所有新闻以及作者用户名
router.get("/select/all", (req: any, res: any) => {
    const sql =
        "SELECT news.*,user.user_name as news_writer_name FROM news,user WHERE news.news_writer_id=user.user_id";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

// 用户查询所处部门能见到的新闻
router.get("/select/byUser", (req: any, res: any) => {
    const user_id = req.query.user_id;
    const department_id = req.query.department_id;
    const sql = `SELECT (CASE
					WHEN s.star_id IS NULL THEN 0
					WHEN s.star_id IS NOT NULL THEN 1
				END
				) as is_stared,
				(CASE
					WHEN p.praise_id IS NULL THEN 0
					WHEN p.praise_id IS NOT NULL THEN 1
				END
				) as is_praised,
				u.user_name as news_writer_name,
				n.*
				FROM news as n
				LEFT JOIN user as u
				ON (n.news_writer_id=u.user_id)
				LEFT JOIN news_star as s
				ON (s.news_id=n.news_id AND s.user_id = ${user_id})
				LEFT JOIN news_praise as p
				ON (p.news_id=n.news_id AND p.user_id = ${user_id})`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            const data: News[] = [];
            for (let index = 0; index < solution.length; index++) {
                const element: News = solution[index];
                const news_dps: string = element.news_dps;
                if (news_dps != "-1") {
                    // 不是全部可见
                    const news_dps_list: string[] = news_dps.split(",");
                    if (news_dps_list.indexOf(department_id) == -1) {
                        data.push(element);
                    }
                } else if (news_dps == "-1") {
                    // 全部可见
                    data.push(element);
                }
            }
            res.json(data);
        }
    });
});

// 以新闻ID查询新闻内容
router.get("/select/content/byId", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const sql = `SELECT news_content FROM news WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution[0].news_content);
        }
    });
});

// 更新新闻
router.get("/update", (req: any, res: any) => {
    const news: News = req.query;
    const news_id = news.news_id;
    const news_title = news.news_title;
    const news_dps = news.news_dps;
    const news_content = news.news_content;

    const sql = `UPDATE news SET news_title='${news_title}',news_dps='${news_dps}',news_content='${news_content}' WHERE news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
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
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

// 添加新闻
router.get("/add", (req: any, res: any) => {
    const query = req.query as News;
    const news = {
        news_title: "在此修改标题",
        news_content: "请修改内容",
        news_writer_id: query.news_writer_id,
        news_created_time: new Date().toString(),
    };
    const sql = `INSERT INTO news (news_title,news_content, news_writer_id, news_praise_number, news_star_number, news_created_time, news_dps) VALUES ('${news.news_title}', '${news.news_content}', '${news.news_writer_id}', 0, 0, '${news.news_created_time}', '-1')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/getLatestNewsId", (req: any, res: any) => {
    const sql = `SELECT news_id FROM news ORDER BY news_id DESC LIMIT 1`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/select/byEditor", (req: any, res: any) => {
    const writer_id = req.query.writer_id;
    const sql = `SELECT news.*,user.user_name as news_writer_name FROM news,user WHERE news.news_writer_id='${writer_id}' AND news.news_writer_id=user.user_id`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/select/all/byId", (req: any, res: any) => {
    const news_id = req.query.news_id;
    const sql = `SELECT news.*,user.user_name as news_writer_name FROM news,user WHERE news_id='${news_id}' AND news.news_writer_id=user.user_id`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            // throw err;
        } else {
            res.json(solution[0]);
        }
    });
});

/*=========================点赞收藏=========================*/
router.get("/praise", (req: any, res: any) => {
    let news_id: number = req.query.news_id;
    const sql = `UPDATE news SET news_praise_number=news_praise_number+1 WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.send("ok");
        }
    });
});
router.get("/depraise", (req: any, res: any) => {
    let news_id: number = req.query.news_id;
    const sql = `UPDATE news SET news_praise_number=news_praise_number-1 WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.send("ok");
        }
    });
});
router.get("/star", (req: any, res: any) => {
    let news_id: number = req.query.news_id;
    const sql = `UPDATE news SET news_star_number=news_star_number+1 WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.send("ok");
        }
    });
});
router.get("/destar", (req: any, res: any) => {
    let news_id: number = req.query.news_id;
    const sql = `UPDATE news SET news_star_number=news_star_number-1 WHERE news_id=${news_id}`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.send("ok");
        }
    });
});

module.exports = router;
