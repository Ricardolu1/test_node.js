const fs = require('fs')
const path = require('path')
const readline = require('readline')

//文件名
const fullFileName = path.join(__dirname,'../','../','logs','access.log')
//创建stream
const readStream = fs.createReadStream(fullFileName) //是一点一点的读取出来的

//创建readline对象
const rl = readline.createInterface({
  input:readStream
})

let chromeNum = 0
let sum = 0

//逐行读取
rl.on('line',(lineData)=>{
  if (!lineData) {
    return 
  }

  //记录总行数
  sum++
  const arr = lineData.split(' -- ')
  if (arr[2] && arr[2].indexOf('Chrome')>0) {
    //累加Chrome的数量
    chromeNum++
  }
})

//监听读取完成
rl.on('close',()=>{
  console.log('chrome 占比：'+ chromeNum / sum)
  console.log('chromeNum',chromeNum)
  console.log('sum',sum)
})


