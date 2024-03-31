// 统一导入子路由
const admin = require("./admin");
const news = require("./news");
const comment = require("./comment");
const login = require("./login");

module.exports = (app) => {
    app.use("/admin", admin);
    app.use("/news", news);
    app.use("/comment", comment);
    app.use("/login", login);
};
