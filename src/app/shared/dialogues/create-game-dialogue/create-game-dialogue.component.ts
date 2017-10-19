import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from "@angular/forms";


import { MdDialogRef} from '@angular/material';

@Component({
  selector: 'npt-create-game-dialogue',
  templateUrl: './create-game-dialogue.component.html',
  styleUrls: ['./create-game-dialogue.component.css']
})
export class CreateGameDialogueComponent implements OnInit {

constructor(public dialogRef: MdDialogRef<CreateGameDialogueComponent>) {}
  createGameForm:FormGroup;

  ngOnInit() {
    this.createGameForm=new FormGroup({
            "playerName": new FormControl(""),
      "gameName": new FormControl(""),
      "maxPlayerCount": new FormControl(""),
    
      "maxRounds":new FormControl(""),
    
          "fieldNamerray": new FormArray([
            new FormControl(""),
            new FormControl("")
          ])
    
    });

    
  }

  createGame(){
    if (this.createGameForm.valid){
    let data={
      data:this.createGameForm.value
    }
    this.dialogRef.close(data);
    }
    
  }

  onFieldCountChanged(){
    let fieldCOunt=this.createGameForm.controls['fieldCount'].value;
    console
    .log(fieldCOunt);
  }

  addNewField(){
  const control = <FormArray>this.createGameForm.controls['fieldNamerray'];
         
            
              control.push(new FormControl());
            
         

  }
  removeField(index:number){
    const control = <FormArray>this.createGameForm.controls['fieldNamerray'];
         
            
              control.removeAt(index);

  }

}
