const http = require('http')
const querystring = require('querystring')

// const server = http.createServer((req,res)=>{
//   console.log('method:',req.method)
//   const url  = req.url
//   console.log('url:',url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query:',req.query)
//   res.end(JSON.stringify(req.query))
// })

const server = http.createServer((req,res)=>{
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  //设置返回格式为json,如果返回的格式不是json客户端可能不是很好解析我们返回的结果
  res.setHeader('Content-type','application/json') 

  //返回的数据
  const resData = {
    method,
    path,
    url,
    query
  }

  if (method==='GET') {
    res.end(
      JSON.stringify(resData) //返回的都是字符串，但是有的是html，有的是json格式的
    )
  }
  if (method==='POST') {
    let postData = ''
    req.on('data',chunk=>{
      postData += chunk.toString()
    })
    req.on('end',()=>{
      resData.postData = postData
      //返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

server.listen(8000) 
console.log('ok ,8000')