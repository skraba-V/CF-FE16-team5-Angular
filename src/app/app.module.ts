import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
>>>>>>> 3bba9ed0fb69ebe7f93710ebf6af4180c9ec9a08

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    ReviewsComponent
=======
    NavbarComponent,
    HeroComponent
>>>>>>> 3bba9ed0fb69ebe7f93710ebf6af4180c9ec9a08
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
