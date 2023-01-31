import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginComponent } from './login/login.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { RegisterComponent } from './register/register.component';
import { DemandeComponent } from './demande/demande.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'emp',component:HomeEmpComponent},
  {path:'register',component:RegisterComponent},
  {path:'demande',component:DemandeComponent},
  {path:'dem',component:DemandeDetailsComponent},
  {path:'admin',component:HomeAdminComponent},
  { path: 'users', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }