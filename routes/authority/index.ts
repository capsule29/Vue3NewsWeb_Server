const express = require("express");
const router = express.Router();
import db from "../../database";

router.get("/get", (req: any, res: any) => {
    const sql = `SELECT * FROM authority`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            throw err;
        } else {
            console.log(solution);
            res.json(solution);
        }
    });
});
export {};
module.exports = router;
