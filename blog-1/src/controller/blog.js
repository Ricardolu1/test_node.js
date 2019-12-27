const {
  exec,
  escape
} = require('../db/mysql')
const xss = require('xss')

//跟这个1=1类似的是，在我们写url参数的时候

const getList = (author,keyword)=>{
  //先返回假数据，格式是正确的
  let sql = `select * from blogs where 1=1 `
  author = escape(author)
  //因为author的值不确定 ,keyword的值也不确定所有要加一个1=1
  //1=1也是一个条件，永远成立不会影响后面的语句，语法结构上需要，因为语法不能乱，这是一个小技巧，让代码更加简洁
  
  if (author) {
    sql+=`and author=${author} `
  }
  if (keyword) {
    sql+=`and title like '%${keyword}%' `
    console.log('2222')
  }
  sql+=`order by createtime desc;`

  //这里返回的是promise
  return exec(sql)
}


const getDetail = (id)=>{
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows=>{
    return rows[0]
  })
}

const newBlog = (blogData)=>{
  //blogData是一个博客对象，包含title，content author属性
  const title = xss(blogData.title)
  console.log('title is',title)
  const content = xss(blogData.content)
  const author = xss(blogData.author)
  const createTime = Date.now()
  const sql = `
    insert into blogs (title,content,createtime,author)
    values ('${title}','${content}',${createTime},'${author}');
  `
  return exec(sql).then(insertData=>{
    // console.log('insertData is ', insertData)
    return {
      id:insertData.insertId
    }
  })
  
}

const updateBlog = (id,blogData={})=>{
  //id是要更新博客的id
  //blogData是一个博客对象，包含title，content属性
  const {title,content} = blogData
  const sql = `
    update blogs set title='${title}',content = '${content}' where id=${id}
  `
  return exec(sql).then(updateData=>{
    // console.log('updateData is ',updateData)
    if (updateData.affectedRows>0) {
      return true
    }
    return false 
  })
}

const delBlog = (id,author)=>{
  //id就是要删除博客的id 
  const sql = `
    delete from blogs where id=${id} and author='${author}';
  `
  return exec(sql).then(deleteData=>{
    // console.log('deleteData is ',deleteData)
    if (deleteData.affectedRows>0) {
      return true
    }
    return false 
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}