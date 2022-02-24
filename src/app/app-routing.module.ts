import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"product",component:ProductlistComponent},
  {path:"",component:ProductlistComponent},
  {path:"login",component:LoginComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent},
  {path:"**",component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
