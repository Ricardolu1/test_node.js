var express = require('express')
var router = express.Router()

router.get('/list', function(req, res, next) {
  res.json({ //res,json可以直接返回一个json格式的文件，而且还会给你加一个content-type的头
    errno:0,
    data:'ok'
  })
})


router.get('/detail', function(req, res, next) {
  res.json({
    errno:0,
    data:'ok'
  })
})



module.exports = router
