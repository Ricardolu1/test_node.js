var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

//引用路由
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

var app = express()

// view engine setup 和view相关的的暂时还用不到
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json()) //获取到post过来的数据，urlencoded也是,把json解析成js对象
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

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
