import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiliconComponent } from './silicon/silicon.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeCarouselComponent } from './coffee-carousel/coffee-carousel.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { CartComponent } from './header/cart/cart.component';
import { ProductsComponent } from './header/products/products.component';
import { DatetimeService } from './datetime.service';
import { HttpDataStorageService } from './http-data-storage.service';
import { GetJsonDataService } from './get-json-data.service';

import { GetDataComponentComponent } from './get-data-component/get-data-component.component';
import { SetDataComponentComponent } from './set-data-component/set-data-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiliconComponent,
    CoffeeHeaderComponent,
    CoffeeCarouselComponent,
    CoffeeFooterComponent,
    CartComponent,
    ProductsComponent,
    GetDataComponentComponent,
    SetDataComponentComponent,
    ReactiveFormComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatetimeService, GetJsonDataService, HttpDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
