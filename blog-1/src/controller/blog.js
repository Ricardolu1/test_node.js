const {exec} = require('../db/mysql')

//跟这个1=1类似的是，在我们写url参数的时候

const getList = (author,keyword)=>{
  //先返回假数据，格式是正确的
  let sql = `select * from blogs where 1=1 `
  //因为author的值不确定 ,keyword的值也不确定所有要加一个1=1
  //1=1也是一个条件，永远成立不会影响后面的语句，语法结构上需要，因为语法不能乱，这是一个小技巧，让代码更加简洁
  
  if (author) {
    sql+=`and author='${author}' `
  }
  if (keyword) {
    sql+=`and title like '%${keyword}%' `
  }
  sql+=`order by createtime desc;`

  //这里返回的是promise
  return exec(sql)
}


const getDetail = (id)=>{
  //先返回假数据
  return {
    id:1,
    title:'标题a',
    content:'内容a',
    createTime:1576486231189,
    author:'zhangsan'
  }
}

const newBlog = (blogData)=>{
  //blogData是一个博客对象，包含title，content属性
  console.log('newBlog blogData...',blogData)
  return{
    id:3 //表示新建博客插入到数据表里面的id
  }
}

const updateBlog = (id,blogData={})=>{
  //id是要更新博客的id
   //blogData是一个博客对象，包含title，content属性
  console.log('update blog',id,blogData)
  return false
}

const delBlog = (id)=>{
  //id就是要删除博客的id 

  return true

}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}