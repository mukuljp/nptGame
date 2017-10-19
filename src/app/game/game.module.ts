import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';

import { ComponentsModule } from './components/components.module';
import { SharedModule } from './../shared/shared.module';
import { GameRoutingModule } from "./game.routing";

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    ComponentsModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    
  ]
})
export class GameModule { }
