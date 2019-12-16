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
module.exports = {
  getList,
  getDetail
}