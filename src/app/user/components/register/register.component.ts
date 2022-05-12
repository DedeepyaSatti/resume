import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { UserService } from '../../service/user.service';
const URL = 'http://localhost:5000/api/upload';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : IUser={
    name:'',
    email :'',
    password:'',
    avatar:''
  }
  public isEmpty:boolean;
  public errorMessage:string;
  public message:string;
  public isSubmitted:boolean;
  constructor(private userService:UserService,
    private router :Router) { }
    
  ngOnInit(): void {
    
    
 
  }

 /*select profile photo
 public selectProfileImage(event){
  if(event.target.files && event.target.files.length){
const [file] =event.target.files;
let reader = new FileReader();
reader.readAsDataURL(file);
this.imageFileName=file;
reader.addEventListener('load', ()=>{
  return reader.result ? this.user.avatar = String(reader.result) : '';

});
}
}*/

//submit register
public submitRegister(){
  let {name,email,password}=this.user;
  if(name !==''&& email!=='' && password !==''){
   this.isEmpty =false;
  this.userService.register(this.user).subscribe( (data)=>{
  this.message=data.result;
  this.router.navigate(['/user/login']);
  this.isSubmitted=true;
  
  }, (error)=>{
    this.errorMessage=error;
  });
}
  else{
    this.isEmpty=true;
    this.isSubmitted=false;
    }
  
   
  }
}
