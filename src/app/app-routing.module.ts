import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/layout/main/main.component';
import { ProductLinesComponent } from './components/product-lines/product-lines.component';
import { ProductsComponent } from './components/products/products.component';
import { QuoteComponent } from './components/newBusiness/quote/quote/quote.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { AdminComponent } from './components/sys/admin/admin.component';



const routes: Routes = [
  { path: '', component: ProductLinesComponent},
  { path: 'products/:companyid/:companyname/:productlineid/:productlinename/:url', component: ProductsComponent},
  { path: 'quote', component: QuoteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
