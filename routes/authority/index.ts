const express = require("express");
const router = express.Router();
const db = require("../../mysql2_database");

router.get("/select", (req: any, res: any) => {
    const sql = `SELECT * FROM authority`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            // console.log(solution);
            res.json(solution);
        }
    });
});

router.get("/add", (req: any, res: any) => {
    const authority_name = req.query.authority_name;
    const sql = `INSERT INTO authority (authority_name) VALUES ('${authority_name}')`;
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
    const authority_id = req.query.authority_id;
    const sql = `DELETE FROM authority WHERE authority_id='${authority_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/update", (req: any, res: any) => {
    const authority_id = req.query.authority_id;
    const authority_name = req.query.authority_name;
    const sql = "UPDATE department SET ";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

export {};
module.exports = router;
