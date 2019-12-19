const fs = require('fs')
const path = require('path')

// const fullFileName = path.resolve(__dirname,'files','a.json') 

// fs.readFile(fullFileName,(err,data)=>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// })

//callback方式获取一个文件的内容

// function getFileContent(fileName,callback) {
//   const fullFileName = path.resolve(__dirname,'files',fileName) 
//   fs.readFile(fullFileName,(err,data)=>{
//     if (err) {
//       console.log(err)
//       return
//     }
//     callback(
//       JSON.parse(data.toString())
//     )
//   })
// }

// //测试
// getFileContent('a.json',aData=>{
//   console.log('adata',aData)
//   getFileContent(aData.next,bData=>{
//     console.log('bdata',bData)
//     getFileContent(bData.next,cData=>{
//       console.log('cData',cData)
//     })

    
//   })
// })

//用promise获取数据

function getFileName(fileName) {
  const promise = new Promise((resolve,reject)=>{
    const fullFileName = path.resolve(__dirname,'files',fileName) 
    fs.readFile(fullFileName,(err,data)=>{
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}

getFileName('a.json')
  .then(aData=>{
    console.log('aData',aData)
    return getFileName(aData.next)
  })
  .then(bData=>{
    console.log('bData',bData)
    return getFileName(bData.next)
  })
  .then(cData=>{
    console.log('cData',cData)
  })

  //async await
  

















