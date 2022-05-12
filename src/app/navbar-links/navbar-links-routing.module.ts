import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularReactiveFormComponent } from './components/angular-reactive-form/angular-reactive-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { EducationComponent } from './components/education/education.component';

import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { NavbarLinksComponent } from './navbar-links.component';

const routes: Routes = [
{ path: '', component: NavbarLinksComponent },
{ path: 'my-profile', component: MyProfileComponent},
{ path: 'education', component: EducationComponent},
{ path: 'technical-skills', component: TechnicalSkillsComponent},
{ path: 'work-experience', component: WorkExperienceComponent},
{ path:'contact-form', component: ContactFormComponent },
{ path: 'reactive-form', component:ReactiveFormComponent},
{ path: 'angular-reactive', component:AngularReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarLinksRoutingModule { }
