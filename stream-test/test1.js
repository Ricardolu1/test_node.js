//标准输入输出是linux的一个功能

// process.stdin.pipe(process.stdout)

// const http = require('http')
// const server = http.createServer((req,res)=>{
//   if (req.method==='POST') {
//     req.pipe(res) //最主要 res 是一个水桶 req是一个水桶，他们用一个管道连起来了，req里面的内容一下子就会通过管道跑到res中来.
//     // 
//   }
// })

// server.listen(8000)

//复制文件的功能 
// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname,'data.txt')
// const fileName2 = path.resolve(__dirname,'data-bak.txt')

// //先把他们变成两个水桶
// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)

// readStream.on('data',chunk=>{
//   console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//   console.log('copy done')
// })

const http = require('http')
const path = require('path')
const fs = require('fs')
const fileName1 = path.resolve(__dirname,'data.txt')
const server = http.createServer((req,res)=>{
  if (req.method==='GET') {
    //结合文件io操作stream和网络io操作stream
    const readStream = fs.createReadStream(fileName1)
    readStream.pipe(res)
  }
})
server.listen(8000)








