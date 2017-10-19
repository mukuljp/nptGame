
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameRootComponent } from './components/game-root/game-root.component';
import { RoundsComponent } from './components/rounds/rounds.component';
const routes: Routes = [
  {
    path: '',
    component:GameRootComponent
    //children: []
  },
  {
    path:'rounds',
    component:RoundsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
