class BaseModel{
  constructor(data,message){
    if (typeof data ==='string') { //做一个兼容，data是一个对象
      this.message=data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel{
  constructor(data,message){
    super(data,message)//super的意思是执行一下父类的构造函数
    this.errno = 0
  }
}

class ErrorModel extends BaseModel{
  constructor(data,message){
    super(data,message)
    this.errno = -1
  }
}
module.exports = {
  SuccessModel,
  ErrorModel
}