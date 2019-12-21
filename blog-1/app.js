
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

//用于处理postData

const getPostData = (req)=>{
  return new Promise((resolve,reject)=>{
    if (req.method!=='POST') {
      resolve({})
      return
    }
    if(req.headers['content-type'] !== 'application/json'){
      resolve({})
      return
    }

    let postData=''
    req.on('data',chunk=>{
      postData += chunk.toString() //chunk本身是个二进制的格式
    })
    req.on('end',()=>{
      if(!postData){
        resolve({})
        return
      }  
      resolve(
        JSON.parse(postData)
      )
    })
  })
}

const serverHandle = (req,res)=>{
  //设置返回格式json,业界规范，
  res.setHeader('Content-type','application/json; charset=utf-8')
  
  //获取path
  const url = req.url
  req.path = url.split('?')[0]

  //解析query
  req.query = querystring.parse(url.split('?')[1])

  //处理postData
  getPostData(req).then(postData=>{
    req.body = postData
    //处理blog路由
    // const blogData = handleUserRouter(req,res)
    // if (blogData) {
    //   res.end(
    //     JSON.stringify(blogData)
    //   )
    //   return 
    // }
    
    const blogResult = handleBlogRouter(req,res)
    if (blogResult) {
      blogResult.then(blogData=>{
          res.end(
            JSON.stringify(blogData)
          )
        })
      return 
    }
        
    //处理user路由
    // const userData = handleUserRouter(req,res)
    // if (userData) {
    //   res.end(
    //     JSON.stringify(userData)
    //   )
    //   return 
    // }
    const userResult = handleUserRouter(req,res)
    if (userResult) {
      userResult.then(userData=>{
        res.end(
          JSON.stringify(userData)
        )
      })
      return 
    }
    
    //未命中路由
    res.writeHead(404,{'Content-type':'text/plain'}) //text/plain就是一个纯文本
    res.write('404 not find\n')
    res.end()
  })
} 
  
  
module.exports = serverHandle
  
//process.env.NODE_ENV, //process是nodejs提供的一个全局变量