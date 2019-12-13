const http = require('http')
// const querystring = require('querystring')

// const server = http.createServer((req,res)=>{
//   console.log('method:',req.method)
//   const url  = req.url
//   console.log('url:',url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query:',req.query)
//   res.end(JSON.stringify(req.query))
// })

const server = http.createServer((req,res)=>{
  if (req.method==='POST') { //注意这里POST要大写
    //req 数据格式
    console.log('req content-type:',req.headers['content-type'])//用JSON
    //接受数据
    let postData=''
    req.on('data',chunk=>{
      postData+=chunk.toString() //chunk本身是个二进制的格式
    })
    req.on('end',()=>{
      console.log('postData:',postData)
      res.end('hellp world')
    })
  }
})

server.listen(8000) 
console.log('ok ,8000')