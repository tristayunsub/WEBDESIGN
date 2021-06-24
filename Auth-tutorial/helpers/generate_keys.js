const crypto = require('crypto')

const key1 = crypto.randomBytes(32).toString('hex') //randombytes로 버퍼값을 주고 toString으로 변환 
const key2 = crypto.randomBytes(32).toString('hex')
console.table({key1, key2}) //테이블 형태로 key값 2개
