const redis = require('redis')

//创建客户端
const redisClient = redis.createClient(6379,'127.0.0.1')
redisClient.on('err',err=>{
  console.error(err)
})

//测试
redisClient.set('myname','zhangsan2',redis.print)
redisClient.get('myname',(err,val)=>{//这是一个异步的
  if (err) {
    console.error(err)
    return
  }
  console.log('val',val)
  
  //退出
  redisClient.quit()
})