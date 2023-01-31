import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginComponent } from './login/login.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { HomeDirComponent } from './home-dir/home-dir.component';
import { RegisterComponent } from './register/register.component';
import { DemandeComponent } from './demande/demande.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    HomeAdminComponent,
    LoginComponent,
    HomeEmpComponent,
    HomeDirComponent,
    RegisterComponent,
    DemandeComponent,
    DemandeDetailsComponent,
    DemandeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 