const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../../services").userService
module.exports = {
  async auth(req,res,next){
    const payload = req.body
    const user = await userService.getUserByEmail( payload.email);
    if(!user){
      res.send(400,"Invalid input")
    }
    if(!await bcrypt.compare(payload.password , user.password)){
      res.send(401,"Invalid email/password supplied")
    }
    const token = jwt.sign({_id: payload._id}, "secret")
     res.cookie("jwt-token", token, {httpOnly: true , maxAge: 24 * 60 * 60 * 1000})
     const {password,salt,email, ...data} = await user.toJSON()
     res.status(200).send(data)
  }
}