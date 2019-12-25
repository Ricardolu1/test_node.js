const fs = require('fs')
const path = require('path')

//写日志
function writeLog(writeStream,log) {
  writeStream.write(log+'\n') //关键代码
}

//生成 writeStream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname,'../','../','logs',fileName)
  const writeStream = fs.createWriteStream(fullFileName,{
    flags:'a' //append
  })
  return writeStream
}

//写访问日志的一个函数
const accessWriteStream = createWriteStream('access.log') //生成一个对象
//access函数被定义的时候
//go={writeLog:func,createWrite:func,accessWriteStream:对象,access:func}
//ao:{log:值}
function access(log) {
  writeLog(accessWriteStream,log)
}

//这个access函数中有闭包，所以他的作用域链引用了别的变量
module.exports={
  access
}






















