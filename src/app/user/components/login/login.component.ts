import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:IUser={
    name :'',
    email:'',
    password:'',
    avatar:''
  };
  public isEmpty:boolean;
  public errorMessage:string;
  public isSubmitted:boolean;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
public submitLogin(){
  let {email,password}=this.user;
  if(email!=='' && password !==''){
   this.isEmpty =false;
this.userService.login(this.user).subscribe( (data)=>{
let token=data.token;
//store the token in local storage
localStorage.setItem('token',token);
localStorage.setItem('user',JSON.stringify(data.user));
//redirect the page to pro events page.
this.router.navigate(['/']);
this.isSubmitted=true;
},(error)=>{
this.errorMessage=error;
})
}
else{
  this.isEmpty=true;
  this.isSubmitted=false;
  }


}
}
