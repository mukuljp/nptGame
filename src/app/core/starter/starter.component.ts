import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

import {MdDialog} from '@angular/material';


import { CreateGameDialogueComponent } from "../../shared/dialogues/create-game-dialogue/create-game-dialogue.component";
import { JoinGameDialogueComponent } from "../../shared/dialogues/join-game-dialogue/join-game-dialogue.component";

import {GameCommunicationService} from "../../shared/services/game-communication.service";
import {GameDataService} from "../../shared/services/game-data.service";
@Component({
  selector: 'npt-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  
  constructor(
    public dialog:MdDialog,
    private router:Router,
    private gameComService:GameCommunicationService,
    private gameDataService:GameDataService
    ) { }

  ngOnInit() {
 
  }

  openCreateGameDialog() {
    let dialogConfig={
      disableClose:false
    }
    let dialogRef = this.dialog.open(CreateGameDialogueComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
      console.log(result);
      if (result){
        this.gameComService.createGame(result).subscribe(
        (data)=>{
          console.log(data,"dfg");
          let routeData={
            gameData:data,
            type:"create"
          }
          this.gameDataService.setConfig(routeData);
    this.router.navigate(["game",]);      
      
  }
        );
        
      }
      
    });
  }
  
  joinGame(){
       let dialogConfig={
      disableClose:false
    }
    let dialogRef = this.dialog.open(JoinGameDialogueComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
      console.log(result);
      if (result){
        this.gameComService.joinGame(result).subscribe(
        (data)=>{
          console.log(data,"fhj");
          let routeData={
            gameData:data,
            type:"join"
          }
          this.gameDataService.setConfig(routeData);
          this.router.navigate(["game",]);      
      
         }
         );
        
      }
      
    });
  }

    

}

