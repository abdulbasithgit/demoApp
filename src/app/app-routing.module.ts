import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {
    path: 'HomePage',
    component: HomePageComponent
  },
  {
    path: 'UserRegistration',
    component: UserRegistrationComponent
  },
  {
    path: 'UserProfile',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: '/HomePage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
