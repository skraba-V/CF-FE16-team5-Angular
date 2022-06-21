import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WeddingComponent } from './wedding/wedding.component';
import { NatureComponent } from './nature/nature.component';
import { FoodComponent } from './food/food.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ReviewsComponent,
    WeddingComponent,
    NatureComponent,
    FoodComponent,
    AboutUsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
