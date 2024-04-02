// index.ts
// const express = require("express");
import type { Express } from "express";
// 统一导入子路由
// const admin = require("./admin/admin");
// const news = require("./news/news");
// const comment = require("./comment/comment");
// const login = require("./login/login");
const authority = require("./authority");

module.exports = (app: Express) => {
    // app.use("/admin", admin);
    // app.use("/news", news);
    // app.use("/comment", comment);
    // app.use("/login", login);
    app.use("/authority", authority);
};
