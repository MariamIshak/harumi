import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
