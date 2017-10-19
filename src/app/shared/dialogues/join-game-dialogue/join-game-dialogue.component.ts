import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from "@angular/forms";


import { MdDialogRef} from '@angular/material';

@Component({
  selector: 'npt-join-game-dialogue',
  templateUrl: './join-game-dialogue.component.html',
  styleUrls: ['./join-game-dialogue.component.css']
})
export class JoinGameDialogueComponent implements OnInit {

   joinGameForm:FormGroup;
constructor(public dialogRef: MdDialogRef<JoinGameDialogueComponent>) {}
  ngOnInit() {
    this.joinGameForm=new FormGroup({
      "playerName": new FormControl("")
        
    });

    
  }

  joinGame(){
    if (this.joinGameForm.valid){
    let data={
      data:this.joinGameForm.value
    }
    this.dialogRef.close(data);
    }
    
  }

}
