module.exports = {
    apps: [
        {
            name: "PM2运行TypeScript",
            script: "./app.ts",
            args: "-r tsconfig-paths/register app.ts",
            watch: true,
            ignore_watch: ["node_modules"],
            autorestart: true,
            exec_mode: "cluster",
            instances: "max",
        },
    ],
    // pm2 init
    deploy: {
        production: {
            user: "SSH_USERNAME",
            host: "SSH_HOSTMACHINE",
            ref: "origin/master",
            repo: "GIT_REPOSITORY",
            path: "DESTINATION_PATH",
            "pre-deploy-local": "",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
};
