const express = require("express");
const app = express();

// 导入所有子路由
const routes = require("./routes/index");
routes(app);

app.get("/", (req, res) => {
    res.send("服务器访问成功");
});

app.listen(233, (req, res) => {
    console.log("启动成功");
});
