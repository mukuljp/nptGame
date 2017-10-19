import { MdDialog } from '@angular/material';
import { GameCommunicationService } from './../../../shared/services/game-communication.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from "@angular/forms";
import * as _ from 'lodash';

import { GameDataService } from './../../../shared/services/game-data.service';
import { VotingDialogComponent } from "../voting-dialog/voting-dialog.component";




@Component({
  selector: 'npt-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  countDownSeconds:number;

  gameData;
  inputForm:FormGroup;
  constructor(private gameDataService:GameDataService,
  private gameComService:GameCommunicationService,
  private dialog:MdDialog) { }
  
  ngOnInit() {
this.gameData=this.gameDataService.getConfig();
console.log(this.gameData,"rounds");

this.inputForm=new FormGroup({
    "fieldNamerray": new FormArray([])
});
const control = <FormArray>this.inputForm.controls['fieldNamerray'];
         
            
            
_.each(this.gameData.gameData.room.fieldNamerray,(obj)=>{
    control.push(new FormControl());
})
  this.countDownSeconds=5;
  this.gameComService.countDownTimer(10)
  .subscribe(i => {
      this.countDownSeconds=i;
  },
  ()=>{},

  ()=>{
   console.log( this.inputForm.value);
   let datav={
     roomID:this.gameData.gameData.room.gameName,
     roundData:{
        round:this.gameData.gameData.room.round,
        formValues:this.inputForm.value
     }
   }
   this.gameComService.sendRoundData(datav);
  }

  );

  this.gameComService.onVotingStart().subscribe((result)=>{
      let dialogConfig={
      disableClose:true,
      data:result
    }
      let dialogRef = this.dialog.open(VotingDialogComponent,dialogConfig);
  });

  }

}
