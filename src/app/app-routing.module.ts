import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { WeddingComponent } from './wedding/wedding.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FoodComponent } from './food/food.component';
import { NatureComponent } from './nature/nature.component';

const routes: Routes = [
  {
    path: "", component: HeroComponent
  }, 
  {
  path: "about", component: AboutUsComponent
}, 
{
  path: "wedding", component: WeddingComponent
},
{
  path: "food", component: FoodComponent
}, 
{
  path: "nature", component: NatureComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
