const express = require("express");
import type { Express } from "express";
const app: Express = express();

// 导入所有子路由
const routes = require("./routes/index");
routes(app);

app.get("/", (req: any, res: any) => {
    res.send("服务器访问成功");
});

app.listen(233, () => {
    console.log("启动成功");
});
