
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

//创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

//开始连接
con.connect()

//统一执行sql的函数
function exec(sql) {
  return new Promise((resolve,reject)=>{
    con.query(sql,(err,result)=>{
      if (err) {
        reject(err)
        return 
      }
      resolve(result) //返回的是一个数组
    })
  })
}

module.exports = {
  exec,
  escape:mysql.escape
}


































