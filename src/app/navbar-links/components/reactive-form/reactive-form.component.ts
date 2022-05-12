import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  title="reactive-forms";
  submittingform:FormGroup;
  submitted = false;
  constructor(){

  }
  ngOnInit(){
    this.submittingform= new FormGroup(
      {
    "username":new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{3,16}$/)]),
    "mail":new FormControl('',[Validators.required,Validators.email]),
    "course":new FormControl('',Validators.required),
    "gender":new FormControl('',Validators.required)
    });
  }
  a:any;
  b:any;
  c:any;
  d:any;
  ss(){
    this.submitted = true;
       // stop here if form is invalid
       if (this.submittingform.invalid) {
        return;
    }
this.a=this.submittingform.get("username").value;

this.b=this.submittingform.get("mail").value;
this.c=this.submittingform.get("course").value;
this.d=this.submittingform.get("gender").value;
  }
}
