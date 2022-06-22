import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HeroComponent } from './hero/hero.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WeddingComponent } from './wedding/wedding.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [{
  path: "about", component: AboutUsComponent
}, {
  path: "wedding", component: WeddingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
