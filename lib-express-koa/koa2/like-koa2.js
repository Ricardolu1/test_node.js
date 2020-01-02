const http = require('http')

//组合中间件
function compose(middlewareList) { //和express里面handle做对比
  return function (ctx) {
    //中间件调用的逻辑
    function dispatch(i) {
      const fn = middlewareList[i]
      try {
        return Promise.resolve( //保证中间件返回的是一个promise对象
          fn(ctx, dispatch.bind(null,i+1)) //告诉大家不要用this, 实现中间件的执行 
        )//bind返回的是原函数的拷贝 但是他不会执行这个函数 ，这里没有递归
      } catch (error) {
          return Promise.reject(error)
      }
    }
    dispatch(0)
  }
}

class LikeKoa2{
  constructor(){
    this.middlewareList=[] //这时中间件要存储的地方 空数组等待被注册
  }

  use(fn){ //把中间件注册到这个数组中，中间件就是一个函数
    this.middlewareList.push(fn)
    return this //支持链式调用
  }

  createContext(req,res){
    let ctx={
      req,
      res
    }
    ctx.query = req.query
    return ctx
  }

  handleRequest(ctx,fn){ //fn就是middleware
    return fn(ctx) //promise
  }

  callback(){
    const fn = compose(this.middlewareList)

    return (req,res)=>{
      const ctx = this.createContext(req,res)
      this.handleRequest(ctx,fn)
    }
  }

  listen(...args){
    const server = http.createServer(this.callback())
    server.listen(...args)
  }
}

module.exports = LikeKoa2














