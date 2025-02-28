import { NewsPraise } from "../../model/news_praise/index";
const express = require("express");
const router = express.Router();

const db = require("../../database");


router.get("/add", (req: any, res: any) => {
    const user_id = req.query.user_id;
    const news_id = req.query.news_id;
    const sql = `INSERT INTO news_praise (user_id,news_id) VALUES (${user_id},${news_id})`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/remove", (req: any, res: any) => {
    const user_id = req.query.user_id;
    const news_id = req.query.news_id;
    const sql = `DELETE FROM news_praise WHERE user_id='${user_id}' AND news_id='${news_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/all_news", (req: any, res: any) => {
    const user_id = req.query.user_id;
    const sql = `SELECT (CASE
						WHEN s.star_id IS NULL THEN 0
						ELSE 1
					END
				) as is_praised,
				n.*
FROM news_praise as s, news as n
WHERE s.user_id = ${user_id} AND s.news_id = n.news_id`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

module.exports = router;
