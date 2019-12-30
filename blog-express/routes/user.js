var express = require('express')
var router = express.Router()
const { login} = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

router.post('/login', function(req, res, next) {
  const {username,password} = req.body
      const result = login(username,password)
      return  result.then(data=>{
        console.log('data',data)
          if (data.username) {
            //设置session
            req.session.username = data.username
            req.session.realName = data.realname
            res.json(
              new SuccessModel()
            )
            return
          }
          res.json(
            new ErrorModel('登录失败')
          )
      })
  })

  
  // router.get('/login-test',(req,res,next)=>{
  //   if (req.session.username) { //查到名字，说明账号、密码找到对应的人了
  //     res.json({
  //       errno:0,
  //       msg:'已登录'
  //     })
  //   }
  //   res.json({
  //     errno:-1,
  //     msg:'未登录'
  //   })
  // })

// router.get('/session-test',(req,res,next)=>{
//   const session = req.session
//   console.log(session.viewNum)
//   if (session.viewNum===undefined) {
//     session.viewNum = 0
//   }
//   session.viewNum++
//   res.json({
//     viewNum:session.viewNum
//   })
// })

module.exports = router
