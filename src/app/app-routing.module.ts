import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  {
    path:"",component:LayoutComponent,children:[
      { path:"",redirectTo:"home",pathMatch:'full'},
      {path:"home",component:HomePageComponent},
      {path:"user",loadChildren:()=>import('./user/user.module').then(userMod=>userMod.UserModule)},
      {path:"vendor",loadChildren:()=>import('./vendor/vendor.module').then(vendorMod=>vendorMod.VendorModule)},
    ]
  },
  {
    path:"login",component:LoginComponent
  }
  ,
  {
    path:"register",component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
