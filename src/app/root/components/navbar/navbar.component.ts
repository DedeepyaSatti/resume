import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public isCollapsed = true;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
public isLogin(){
 return this.userService.isLoggedIn();
}
public clickLogOut(){
this.userService.logOut();
this.router.navigate(['/']);
}
public getUser(){
 return this.userService.getUserData();
}

}

