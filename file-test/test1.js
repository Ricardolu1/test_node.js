const fs = require('fs') //文件操作的一个基本的库

const path = require('path') //路径操作一个基本的库

const fileName = path.resolve(__dirname,'data.txt')

//读取文件内容 ,异步的，异步的回调第一个参数都是err

// fs.readFile(fileName,(err,data)=>{
//   if (err) {
//     console.error(err)
//     return 
//   }
//   //data是二进制类型，需要转换为字符串类型
//   console.log(data.toString())
// })

//写入文件
// const content = '这是新写入的内容\n'
// const opt = {
//   flag:'a' //追加写入，覆盖用‘w’
// }

// fs.writeFile(fileName,content,opt,err=>{ //写入不需要返回什么，看有没有报错
//   if (err) {
//     console.error(err)
//   }
// })

//判断文件是否存在

// fs.exists(fileName+'1',(exist)=>{
//   console.log('exist',exist)
// })


 





















