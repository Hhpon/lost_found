module.exports = {
  apps: [
    {
      name: "lost_found",
      script: "app.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "hhp",
      host: "47.94.210.206",
      port: "1221",
      ref: "origin/master",
      repo: "git@github.com:Hhpon/lost_found.git",
      path: "/home/hhp/www/lost_found/production",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy":
        "npm install --registry=https://registry.npm.taobao.org && pm2 reload ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
