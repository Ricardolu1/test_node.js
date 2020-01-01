const router = require('koa-router')()

router.prefix('/users')  //这个是路由的前缀

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) { //访问的时候是uers/bar
  ctx.body = 'this is a users/bar response'
})

module.exports = router
