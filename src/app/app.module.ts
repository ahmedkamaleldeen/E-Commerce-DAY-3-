import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { CoinPipe } from './coin.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardsComponent } from './cards/cards.component';
import { RequestInterceptor } from './request.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
// import {RequestInterceptor} from './request.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    ProductcardComponent,
    CoinPipe,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    PagenotfoundComponent,
    ProductDetailsComponent,
    CardsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:RequestInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
