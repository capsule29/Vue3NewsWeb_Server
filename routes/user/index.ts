import { User } from "../../model/user";

const express = require("express");
const router = express.Router();

const db = require("../../mysql2_database");

router.get("/select/all", (req: any, res: any) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            // console.log(solution[0].user_name);
            res.json(solution);
        }
    });
});

// 查询所有用户
router.get("/select", (req: any, res: any) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            res.json(solution);
        }
    });
});

router.get("/get_name_by_id", (req: any, res: any) => {
    const user_id = req.query.user_id;
    const sql = `SELECT user_name FROM user WHERE user_id='${user_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            // console.log(solution[0].user_name);
            res.json(solution[0].user_name);
        }
    });
});

// 添加用户
router.get("/add", (req: any, res: any) => {
    const query = req.query as User;
    const user = {
        authority_id: query.authority_id,
        user_name: query.user_name,
        password: query.password,
        department_id: query.department_id,
    };
    const sql = `INSERT INTO user (user_name, password, department_id, authority_id) VALUES ('${user.user_name}','${user.password}','${user.department_id}','${user.authority_id}')`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 删除用户
router.get("/delete", (req: any, res: any) => {
    const query = req.query as User;
    const user_id = query.user_id;
    const sql = `DELETE FROM user WHERE user_id='${user_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            res.json("ok");
        }
    });
});

// 更新用户
router.get("/update", (req: any, res: any) => {
    const query = req.query as User;

    const authority_id = query.authority_id;
    const user_name = query.user_name;
    const password = query.password;
    const department_id = query.department_id;
    const user_id = query.user_id;

    const sql = `UPDATE user SET user_name='${user_name}',password='${password}',authority_id='${authority_id}',department_id='${department_id}' WHERE user_id='${user_id}'`;
    db.query(sql, (err: any, solution: any) => {
        if (err) {
            res.json("error");
            throw err;
        } else {
            res.json("ok");
        }
    });
});

export {};
module.exports = router;
