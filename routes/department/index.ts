const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/add", (req: any, res: any) => {
    const department_name = req.query.department_name;
    const sql = `INSERT INTO department (department_name) VALUES ('${department_name}')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/delete", (req: any, res: any) => {
    const department_id = req.query.department_id;
    const sql = `DELETE FROM department WHERE department_id='${department_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/update", (req: any, res: any) => {
    const sql = "UPDATE department";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/select/all", (req: any, res: any) => {
    const sql = "SELECT * FROM department";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            res.json(solution);
        }
    });
});

export {};
module.exports = router;
