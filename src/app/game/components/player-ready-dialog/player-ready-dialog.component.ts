import { Component, OnInit ,Inject} from '@angular/core';
import * as _ from 'lodash';


import { MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

import {GameCommunicationService} from "../../../shared/services/game-communication.service";
@Component({
  selector: 'npt-player-ready-dialog',
  templateUrl: './player-ready-dialog.component.html',
  styleUrls: ['./player-ready-dialog.component.css']
})
export class PlayerReadyDialogComponent implements OnInit {
   playerList;
   disableReady : boolean;
   countDownSeconds:number=5;
  constructor(public dialogRef : MdDialogRef<PlayerReadyDialogComponent>,@Inject(MD_DIALOG_DATA) public data:any,private gameComService:GameCommunicationService) { }

  ngOnInit() {
this.disableReady=false;
      console.log(this.data,"from readymodal");
    this.playerList=_.filter(this.data.room.gameData.room.playerList,(obj)=>{
      return this.data.room.gameData.playerId!=obj.id;
    });
  console.log(this.data,"from readymodal");

  this.gameComService.onOtherPlayerReady().subscribe((result:any) =>{
      this.data.room.gameData.room.playerList=result.room.playerList;
     this.playerList=_.filter(this.data.room.gameData.room.playerList,(obj)=>{
      return this.data.room.gameData.playerId!=obj.id;
    });
    if (result.room.startRound){
      
      this.gameComService.countDownTimer(this.countDownSeconds)
  .subscribe(i => {
      this.countDownSeconds=i;
  },
  ()=>{},

  ()=>{
    this.dialogRef.close({
      room:result.room
    });
  }

  );
    }

  });

}

onReady(){
  this.disableReady=true;

   let emitData={
      roomId: this.data.room.gameData.room.gameName,
      playerId: this.data.room.gameData.playerId
    }
    this.gameComService.playerReady(emitData);
}


}
