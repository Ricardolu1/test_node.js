const getList = (author,keyword)=>{
  //先返回假数据，格式是正确的
  return[
    {
      id:1,
      title:'标题a',
      content:'内容a',
      createTime:1576486231189,
      author:'zhangsan'
    },
    {
      id:2,
      title:'标题b',
      content:'内容b',
      createTime:1576486267133,
      author:'lisi'
    }
  ] 
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