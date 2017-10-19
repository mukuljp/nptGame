import { Injectable } from '@angular/core';

@Injectable()
export class GameDataService {
  private gameConfigeration;
  constructor() { 

  }

  getConfig(){
    return this.gameConfigeration;
  }
  setConfig(config){
    this.gameConfigeration=config;
  }

  updateGameRoom(room){
    this.gameConfigeration.gameData.room=room;
  }

}
