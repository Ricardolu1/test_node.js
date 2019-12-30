const redis = require('redis')
const {REDIS_CONF} = require('../conf/db')

//创建客户端 这好像是一个全局的
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host)
redisClient.on('err',err=>{
  console.error(err)
})

module.exports = redisClient