const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/get", (req: any, res: any) => {
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
