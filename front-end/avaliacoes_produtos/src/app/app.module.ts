import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductEvaluationsListComponent } from './product-evaluations-list/product-evaluations-list.component';
import { ProductEvaluationsFormComponent } from './product-evaluations-form/product-evaluations-form.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsFormComponent,
    ProductEvaluationsListComponent,
    ProductEvaluationsFormComponent,
    MenuComponent,
    NotFoundComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
