var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

//引用路由
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

var app = express()

// view engine setup 和view相关的的暂时还用不到
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev',{
  stream:process.stdout //这个参数是默认的参数 日志是要通过流来输入输出的
}))

app.use(express.json()) //获取到post过来的数据，urlencoded也是,把json解析成js对象
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

const redisClient = require('./db/redis')
const sessionStore = new RedisStore({
  client:redisClient
})

app.use(session({
  secret:'WJiol#123132',
  cookie:{
    // path:'/',//默认配置
    // httpOnly:true,//前端无法访问cookie保证安全性  默认配置
    maxAge:24*60*60*1000 
  },
  store:sessionStore,
  resave: true,
  saveUninitialized: true
})) //要放在路由的前面
 
// app.use('/', indexRouter)
// app.use('/users', usersRouter)

//这里是我们自己写的，上面的是框架自带的
app.use('/api/blog', blogRouter)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'dev' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
