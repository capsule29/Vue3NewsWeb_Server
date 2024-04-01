// const express = require("express");
// 统一导入子路由
const admin = require("./admin/admin");
const news = require("./news/news");
const comment = require("./comment/comment");
const login = require("./login/login");

module.exports = (app) => {
    app.use("/admin", admin);
    app.use("/news", news);
    app.use("/comment", comment);
    app.use("/login", login);
    console.log(app);
};
