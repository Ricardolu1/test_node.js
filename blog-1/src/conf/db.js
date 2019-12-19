const env = process.env.NODE_ENV  //获取环境变量 环境参数

//配置
let MYSQL_CONF

if (env==='dev') {
  MYSQL_CONF={
    host:'localhost',
    user:'root',
    password:'622867',
    port:'3306',
    database:'myblog'
  }
}

//实际做项目的时候，你应该写成实际的你的线上的地址以及用户名和密码、端口
if (env==='production') {
  MYSQL_CONF={
    host:'localhost',
    user:'root',
    password:'622867',
    port:'3306',
    database:'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}










































