import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';
import { GameRootComponent } from './game-root/game-root.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RoomListComponent } from './room-list/room-list.component';
import { CurrentRoomComponent } from './current-room/current-room.component';
import { RoomArrayFilterPipe } from '../pipes/room-array-filter.pipe';
import { PlayerReadyDialogComponent } from './player-ready-dialog/player-ready-dialog.component';
import { RoundsComponent } from './rounds/rounds.component';
import { VotingDialogComponent } from './voting-dialog/voting-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [GameRootComponent, UserProfileComponent, RoomListComponent, CurrentRoomComponent,RoomArrayFilterPipe, PlayerReadyDialogComponent, RoundsComponent, VotingDialogComponent],
  exports : [GameRootComponent],
  entryComponents:[PlayerReadyDialogComponent,VotingDialogComponent]
})
export class ComponentsModule { }
