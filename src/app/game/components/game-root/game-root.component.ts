import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


import {MdDialog} from '@angular/material';

import { GameCommunicationService } from "../../../shared/services/game-communication.service";
import { GameDataService } from "../../../shared/services/game-data.service";

import { PlayerReadyDialogComponent } from "../player-ready-dialog/player-ready-dialog.component";
@Component({
  selector: 'npt-game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.css']
})
export class GameRootComponent implements OnInit {
  gameData;

  constructor(
    private gameDataService:GameDataService,
    private gameCommunicationService:GameCommunicationService,
     public dialog:MdDialog,
     public router:Router) { }

  ngOnInit() {
    this.gameData = this.gameDataService.getConfig();
  this.gameCommunicationService.updatedRooms().subscribe((data:any)=>{
    this.gameData.gameData.rooms=data.rooms;
    console.log(data);
  });
  this.gameCommunicationService.onNewPlayerJoined().subscribe((data:any)=>{
    this.gameData.gameData.room=data.room;
    
    

    console.log(data,"new player joined");
  });

  this.gameCommunicationService.onStartGame().subscribe((data:any)=>{
    this.gameData.gameData.room=data.room;
    let dialogConfig={
      disableClose:true,
      data:{room:this.gameData}
    }
      let dialogRef = this.dialog.open(PlayerReadyDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
        this.gameDataService.updateGameRoom(result.room);
       this.router.navigate(["game","rounds"]); 
    });
  });

}

onJoin(e){
  console.log(e);
  this.gameCommunicationService.joinRoom(e);
}

}
