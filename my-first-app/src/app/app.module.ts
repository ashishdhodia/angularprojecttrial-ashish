import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


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
import { GetJsonDataService } from './get-json-data.service';

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
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatetimeService, GetJsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
