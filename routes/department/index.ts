const express = require("express");
const router = express.Router();
const db = require("../../mysql2_database");

router.get("/add", (req: any, res: any) => {
    const department_name = req.query.department_name;
    const sql = `INSERT INTO department (department_name) VALUES ('${department_name}')`;
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
    const department_id = req.query.department_id;
    const sql = `DELETE FROM department WHERE department_id='${department_id}'`;
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
    const department_id = req.query.department_id;
    const department_name = req.query.department_name;
    const sql = `UPDATE department SET department_name='${department_name}' WHERE department_id='${department_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json("ok");
        }
    });
});

router.get("/select/all", (req: any, res: any) => {
    const sql = "SELECT * FROM department";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/select/byId", (req: any, res: any) => {
    const department_id = req.query.department_id;
    const sql = `SELECT * FROM department WHERE department_id='${department_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            // throw err;
        } else {
            res.json(solution);
        }
    });
});

export {};
module.exports = router;
