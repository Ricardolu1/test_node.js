const router = require('koa-router')()

router.prefix('/user')  //这个是路由的前缀

router.post('/login', async (ctx, next)=>{
  ctx.body = 'this is a users response!'
})

router.get('/bar', async (ctx, next)=>{ //访问的时候是uers/bar
  ctx.body = 'this is a users/bar response'
})

module.exports = router
