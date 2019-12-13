const http = require('http') //http是node自带的一个模块

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/html'})
  res.end('<h1>hello</h1>')
})

server.listen(3000,()=>{
  console.log('listen on 3000 port')
})