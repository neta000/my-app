'use strict'

class UserController {
  async Aniket({request,response}){
    response.send({
      "messsage": "hello world"
  })
  }
  async sum({request,response}){
    const data = request.all()
    const add = data.a+ data.b
    response.send({
      "sum is ": add
  })
  }
}

module.exports = UserController
