const User =require('../DB/Models/UserModel')
const bcrypt=require('bcryptjs')
const {Router}=require('express')
const router=Router()




router.post('/auth/signup',async (req,res)=>{
    const {email,password,name}=req.body
      const user=await User.findOne({email})
      if(user){res.send({error:'user already exists'}).status(400)}
      else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser=new User({email,password:hashedPassword,name})
       await newUser.save()
       res.send({message:'User Sucessfully Registered'}).status(200)
      }
  })

  router.post('/login', async (req,res)=>{
    const {password,email}=req.body
    let user=await User.findOne({email})
    if(!user){
        res.send({err:"user not found"})
    }
    
    else{
        const passCompare=await bcrypt.compare(password,user.password)
        if(passCompare){
           const data={
            userId:user._id
           }
            const token=jwt.sign(data,process.env.JWT_SECRET)
            //set this auth token to local storage for further authentication
            res.json({authToken:token})
        }   
    }
 })

  module.exports=router