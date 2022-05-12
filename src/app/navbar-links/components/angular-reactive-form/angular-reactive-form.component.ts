import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularReactiveFormService } from '../../services/angular-reactive-form.service';
@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: AngularReactiveFormService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, this.customValidator.namePatternValidator()])],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
}

alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}