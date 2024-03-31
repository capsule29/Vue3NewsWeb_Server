const express = require("express");
const app = express();

// 导入所有子路由
const routes = require("./routes/index");
routes(app);

let db = require("./database");

app.get("/", (req, res) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err, solution) => {
        if (err) {
            throw error;
        } else {
            // const JSONResult = JSON.stringify(solution);
            res.json(solution);
        }
    });
});

app.listen(233, (req, res) => {
    console.log("启动成功");
});
