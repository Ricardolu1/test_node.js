const {add,mul} = require('./a') //require返回一个对象
const _ = require('lodash') //这个名字是package.jgon里面依赖的名字
const sum = add(13,20)
const result = mul(13,20)
console.log(sum)
console.log(result)

const arr = _.concat([1,2],3)
console.log('arr....',arr)