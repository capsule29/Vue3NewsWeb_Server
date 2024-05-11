// index.ts
import type { Express } from "express";
// 统一导入子路由
const news = require("./news/index.ts");
const comment = require("./comment/index.ts");
const login = require("./login/index.ts");
const authority = require("./authority/index.ts");
const department = require("./department/index.ts");
const user = require("./user/index.ts");
const news_star = require("./news_star/index.ts");
const news_praise = require("./news_praise/index.ts");

module.exports = (app: Express) => {
    app.use("/news", news);
    app.use("/comment", comment);
    app.use("/login", login);
    app.use("/authority", authority);
    app.use("/department", department);
    app.use("/user", user);
    app.use("/news_star", news_star);
    app.use("/news_praise", news_praise);
};
