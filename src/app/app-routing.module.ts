import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from "./core/starter/starter.component"
const routes: Routes = [
  {
    path: '',
    component:StarterComponent
    //children: []
  },
  {
    path:"game",
    loadChildren:"./game/game.module#GameModule",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
