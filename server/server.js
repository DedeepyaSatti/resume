const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
//configure cors
app.use(cors());

//configure express to accept the form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}))
//configure dotEnv
dotEnv.config({path:'./config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

//configure mongodb
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
    }).then((response)=>{
    console.log('connected to database successfully');
    }).catch((error)=>{
    console.error(error);
    process.exit(1);//stop the node js process
    });

//basic url
app.get('/',(request,response)=>{
response.status(200).send(`<h2>Welcome to my resume backend server</h2>`)
});

/*performs a post request for file upload in register.component.html file
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })*/

  ////performs a post request for image upload in register.component.html file

  const DIR = './uploads';
 
  let storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, DIR);
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      }
  });
  let upload = multer({storage: storage});

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
   
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
   
  app.get('/api', function (req, res) {
    res.end('file catcher example');
  });
   
 


//configure Router
app.use('/user', require('./router/userRouter'));
//app.use('/profile',require('./router/profileRouter'));
//listen to port
app.listen(port,hostname, ()=>{
    console.log(`Express Server is started at http://${hostname}:${port}`)
})