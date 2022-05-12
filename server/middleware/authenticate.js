const jwt=require('jsonwebtoken');

//JWT Token Verification
let verifyToken = (request,response,next)=>{
    if(!request.headers.authorization){
        return response.status(401).send('unauthorized Request');
    }
let token = request.headers.authorization.split(' ')[1];
if(!token){
    return response.status(401).send('unauthorized Request');
    }
    let payload=jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(!payload){

    return response.status(401).send('unauthorized request');
    }
request.user=payload.user;
next();
};

module.exports={
    verifyToken
}