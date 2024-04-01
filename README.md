# Vue3NewsWeb_Server

运行`pm2 start --interpreter ts-node-dev app.ts`
运行`npm run pm2`

# pm2

> pm2 是一个守护进程管理工具，帮助管理和守护应用程序。
>
> pm2 中午网：https://pm2.fenxianglu.cn/

## 安装 pm2

> `npm install pm2@latest -g`
>
> or
>
> `yarn global add pm2`

## pm2 相关命令

```sh
pm2 start <文件名>
pm2 log
pm2 list
pm2 delete <进程id>
pm2 restart <进程id>
pm2 monit
```
