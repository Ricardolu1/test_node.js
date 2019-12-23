const redis = require('redis')
const {REDIS_CONF} = require('../conf/db')

//创建客户端 这好像是一个全局的
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host)
redisClient.on('err',err=>{
  console.error(err)
})

function set(key,val) {
  if (typeof val ==='object') {
    val = JSON.stringify(val) //因为存的时候 val是一个字符串
  }
  redisClient.set(key,val,redis.print)
}

function get(key) {
  return new Promise((resolve,reject)=>{
    redisClient.get(key,(err,val)=>{//这是一个异步的,两个参数系统传的
      if (err) { //异常都在这里处理了
        reject(err)
        return
      }  
      if (val===null) {
        resolve(null)
        return
      }
      try {
        resolve(
          JSON.parse(val)
        )
      } catch (error) {
        resolve(val)
      }//如果是json就把他转换成一个对象，如果不是json就直接返回，try catch不是为了抓住什么异常，就是为了兼容json装换的格式
    })
  })
}

module.exports={
  set,
  get
}












