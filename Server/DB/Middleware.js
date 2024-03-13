const jwt=require('jsonwebtoken')
function auth(req,res,next){

    const authToken=req.header('authToken')
    if(!authToken){
        res.send({error:"Access Denied"})
    }
    else{
        const data=jwt.verify(authToken,process.env.JWT_SECRET)
        req.user=data;
        // now we can access userid and data from req object
        next()
    }


}
module.exports=auth