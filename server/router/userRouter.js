const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const gravatar=require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
/*
usage : Register a user
            URL : http://127.0.0.1:5000/user/register
            method: POST
            fields :name,email,password

*/
router.post('/register',[
body('name').notEmpty().withMessage('Name is Required'),
body('email').notEmpty().withMessage('Email is Required'),
body('password').notEmpty().withMessage('Password is Required')
],async(request,response)=>{
try{

    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({
            errors:errors.array()
        });
        }
       //get the form data
        let {name,email,password} = request.body;

        //check a user already exists
        let user= await User.findOne({email : email});
        if(user){
            return response.status(401).json({
                errors : [
                    { msg : 'User is already exists' }
                ]
            });
        }

       //convert to hashed password
         let salt = await bcrypt.genSalt(10);
         password = await bcrypt.hash(password, salt);
  
       //get avatar URL
          let avatar = gravatar.url(email, {
              s : 200,
              r : 'G',
              d :'mm'
          });

       //make admin false
          let isAdmin = false;

       //store to database
         user = new User({name,email,password,avatar});
         user = await user.save(); //save to db
         response.status(200).json({
             result : 'Registration Success',
             user : user
         });
}  

catch(error){
    console.error(error);
    response.status(500).json({
       errors: [
           {
               msg :error.message
           }
       ]

});
}
});
/*
usage : Login a user
            URL : http://127.0.0.1:5000/user/login
            method: POST
            fields :name,email,password

*/
router.post('/login',[
    body('email').notEmpty().withMessage('Email is Required'),
    body('password').notEmpty().withMessage('Password is Required')
    ],async(request,response)=>{
        
        try{

            let errors = validationResult(request);
            if(!errors.isEmpty()){
                return response.status(401).json({
                    errors:errors.array()
                });
                }
                // get the form data
                let {email,password} = request.body;
                
                //check user is exists or not
                let user = await User.findOne({email :email});
                if(!user){
                    return response.status(401).json({
                        errors : [
                            { msg : 'Invalid Email' }
                        ]
                    });
                }
        
                //check the password match
                 let isMatch = await bcrypt.compare(password,user.password);
                 if(!isMatch){

                    return response.status(401).json({
                        errors : [
                            { msg : 'Invalid Password' }
                        ]
                    });
                }
        
                //create TWT token  and send to client
                    let payload ={
                        user:{
                            id:user.id,
                            name:user.name
                        }
                    };
                    jwt.sign(payload,process.env.JWT_SECRET_KEY , (err , token)=>{
                        if(err) throw err;
                        response.status(200).json( {
                            result : 'Login Success', 
                            token : token,
                            user : user

                        });
                    });
                    
            }
   catch(error){
    console.error(error);
    response.status(500).json({
       errors: [
           {
               msg :error.message
           }
       ]

});
}
});
module.exports = router;