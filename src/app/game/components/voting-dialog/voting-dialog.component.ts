import { GameDataService } from './../../../shared/services/game-data.service';
import { GameCommunicationService } from './../../../shared/services/game-communication.service';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'npt-voting-dialog',
  templateUrl: './voting-dialog.component.html',
  styleUrls: ['./voting-dialog.component.css']
})
export class VotingDialogComponent implements OnInit {
    gameData;
    playerList;
   constructor(public dialogRef : MdDialogRef<VotingDialogComponent>
   ,@Inject(MD_DIALOG_DATA) public data:any
   ,private gameComService:GameCommunicationService,
   public gameDataService:GameDataService
   ) { }


  ngOnInit() {
    this.gameData = this.gameDataService.getConfig();
    console.log(this.data,"voting");
    this.playerList=_.filter(this.data.room.playerList,(obj)=>{
        return this.gameData.gameData.playerId!=obj.id;
    });
    let round=this.data.room.round;
    _.each(this.playerList,(player:any)=>{
      player.votingRound=_.find(player.rounds,(roundObj)=>{
      
       return roundObj.round===round;
      });
      player.vote= _.map( player.votingRound.formValues.fieldNamerray,(obj)=>{
          return {
            value:obj,
            vote:0,

          }
       });
       
  
    });
    console.log(this.playerList,"blaaaa");

  }
upvote(val){
val.vote=1;
}
downvote(val){
  val.vote=-1;
  console.log(this.playerList);
}
}
