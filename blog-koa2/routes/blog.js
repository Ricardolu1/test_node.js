const router = require('koa-router')()

router.prefix('/api/blog')  //这个是路由的前缀

router.get('/list', async (ctx, next)=>{
  const query = ctx.query
  ctx.body = {
    query,
    errno:0,
    data:['获取博客列表']
  }
})


module.exports = router
