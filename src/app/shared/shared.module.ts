import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "@angular/material";

import { CreateGameDialogueComponent } from './dialogues/create-game-dialogue/create-game-dialogue.component';

import { ServicesModule } from "./services/services.module";
import { JoinGameDialogueComponent } from './dialogues/join-game-dialogue/join-game-dialogue.component';
import { GameCommunicationService } from "./services/game-communication.service";
import { GameDataService } from "./services/game-data.service";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule ,
    
  ],
  declarations: [CreateGameDialogueComponent, JoinGameDialogueComponent],
  exports : [ CreateGameDialogueComponent,JoinGameDialogueComponent],
  entryComponents: [CreateGameDialogueComponent,JoinGameDialogueComponent]

})
export class SharedModule {
   static forRoot():ModuleWithProviders  {
        return {
            ngModule: SharedModule,
           providers:[GameCommunicationService,GameDataService]
        };
   }
 }
