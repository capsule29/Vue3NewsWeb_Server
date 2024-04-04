// index.ts
// const express = require("express");
import type { Express } from "express";
// 统一导入子路由
const admin = require("./admin/index.ts");
const news = require("./news/index.ts");
const comment = require("./comment/index.ts");
const login = require("./login/index.ts");
const authority = require("./authority/index.ts");
const department = require("./department/index.ts");

module.exports = (app: Express) => {
    app.use("/admin", admin);
    app.use("/news", news);
    app.use("/comment", comment);
    app.use("/login", login);
    app.use("/authority", authority);
    app.use("/department", department);
};
