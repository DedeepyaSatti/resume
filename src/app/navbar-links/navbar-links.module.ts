import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarLinksRoutingModule } from './navbar-links-routing.module';
import { NavbarLinksComponent } from './navbar-links.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AngularReactiveFormComponent } from './components/angular-reactive-form/angular-reactive-form.component';

@NgModule({
  declarations: [
    NavbarLinksComponent,
    MyProfileComponent,
    TechnicalSkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    AngularReactiveFormComponent
    
  ],
  imports: [
    NavbarLinksRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class NavbarLinksModule { }
