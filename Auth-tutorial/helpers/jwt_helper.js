const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const client = require('./init_redis')


//shoud use "return reject(err)" though it wont affect the code but its good to exit function when the promise has been rejected

module.exports = {
    signAccessToken: (userId) => {
      return new Promise((resolve, reject) => {
          const payload = {
                               //If same key value pairs are present inside payload and options In this case inside options:
                               // issuer resolves to "iss" which is already present inside payload
        
          }
          const secret = process.env.ACCESS_TOKEN_SECRET //super scret key for signing JWT randomkeygen.com or
          const options = {  // expiration time 등등 세팅 audience represent 
              expiresIn: "15s",
              issuer: "pickurpage.com",
              audience: userId,
              
          }
        JWT.sign(payload, secret, options, (err, token) => {
            if (err) {
              console.log(err.message)
              // reject(err)
              reject(createError.InternalServerError()) // you should "return slo after rejecting the error, though it doesnt matter but its a good practice"
            }
            resolve(token)
        })
      })
    },
    verifyAccessToken: (req, res, next) => {
      if (!req.headers['authorization']) return next(createError.Unauthorized())
      const authHeader = req.headers['authorization']
      const bearerToken = authHeader.split('')
      const token = bearerToken[1]
      JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) =>{
        if (err) {
          // if(err.name === 'JsonWebTokenError' ) {
            
          //   return next(createError.Unauthorized())
          // } else { 
          //   return next(createError.Unauthorized(err.message))
          // }
           const message = 
           err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
           return next(createError.Unauthorized(message))
        }
        req.payload = payload
        next()
      })
    },

    signRefreshToken: (userId) => {
      return new Promise((resolve, reject) => {
          const payload = {
                               //If same key value pairs are present inside payload and options In this case inside options:
                               // issuer resolves to "iss" which is already present inside payload
        
          }
          const secret = process.env.REFRESH_TOKEN_SECRET //super scret key for signing JWT randomkeygen.com or
          const options = {  // expiration time 등등 세팅 audience represent 
              expiresIn: "30s",
              issuer: "pickurpage.com",
              audience: userId,
              
          }
        JWT.sign(payload, secret, options, (err, token) => {
            if (err) {
              console.log(err.message)
              // reject(err)
              reject(createError.InternalServerError()) // you should "return slo after rejecting the error, though it doesnt matter but its a good practice"
            }
            client.SET(userId, token, 'EX', 30,  (err, reply) => {
              if (err){
                  console.log(err.message)
                reject(createError.InternalServerError())
                return 
              }
              resolve(token)
              
            })

        })
      })
    },
    verifyRefreshToken: (refreshToken) =>{
      return new Promise((resolve, reject) => {
        JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
          if (err) return reject(createError.Unauthorized())
          const userId = payload.aud
          client.GET(userId, (err, result) => {
            if(err){
              console.log(err.message)
              reject(createError.InternalServerError())
              return 
            }
            if (refreshToken === result) return resolve(userId)
            reject(createError.Unauthorized())
          })

          resolve(userId)
        })
      })
    }
  }