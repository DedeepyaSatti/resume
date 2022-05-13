import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './root/components/hero/hero.component';
import { HomeComponent } from './root/components/home/home.component';
const routes: Routes = [
  { path : '', component : HeroComponent},
  { path: 'navbar-links', loadChildren: () => import('./navbar-links/navbar-links.module').then(m => m.NavbarLinksModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
