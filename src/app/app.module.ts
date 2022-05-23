import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/layout/main/main.component';
import { ProductLinesComponent } from './components/product-lines/product-lines.component';
import { ProductLineComponent } from './components/product-line/product-line.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from './components/newBusiness/quote/quote/quote.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { LogoutComponent } from './components/auth/logout/logout.component'

import { CookieService } from 'ngx-cookie-service';
import { QRCodeModule } from 'angularx-qrcode';
import { AdminComponent } from './components/sys/admin/admin.component';
import { TokenInterceptorService } from './services/token-interceptor.service'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductLinesComponent,
    ProductLineComponent,
    ProductsComponent,
    ProductComponent,
    QuoteComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [CookieService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
