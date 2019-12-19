const mysql = require('mysql')
//创建连接对象
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'622867',
  port:'3306',
  database:'myblog'
})