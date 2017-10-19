import { Subject } from 'rxjs/Subject';


import { Observable } from 'rxjs/Rx';

import * as io from 'socket.io-client';

import { Injectable } from '@angular/core';

import { GameDataService } from "./game-data.service";
@Injectable()
export class GameCommunicationService {
  private url="http://localhost:4300"
  private socket:any;

  constructor (private gameDataService:GameDataService){}
    createGame(gameData) {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
       this.socket.emit("createRoom", gameData);
      this.socket.on('roomCreated', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
  
gameInit(data){
      this.socket = io(this.url);
    this.socket.emit("joinGame",data);
}
  joinGame(result) {
    let observable = new Observable(observer => {
  
      this.gameInit(result);
      this.socket.on('clientJoined', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  updatedRooms() {
    let observable = new Observable(observer => {
  
     
      this.socket.on('updatedRooms', (data) => {
        observer.next(data);    
      });
      return () => {
        //this.socket.disconnect();
      };  
    })     
    return observable;
  }

  joinRoom(roomName){
    this.socket.emit("joinRoom",{roomName:roomName})
  }

  onNewPlayerJoined(){
    let observable = new Observable(observer => {
  
     
      this.socket.on('newPlayerJoined', (data) => {
        observer.next(data);    
      });
      return () => {
        //this.socket.disconnect();
      };  
    })     
    return observable;
  }

  onStartGame(){
    let observable = new Observable(observer => {
  
     
      this.socket.on('startGame', (data) => {
        observer.next(data);    
      });
      return () => {
        //this.socket.disconnect();
      };  
    })     
    return observable;
  }

  playerReady(data){
   
    this.socket.emit("playerReady",data);
  }

  onOtherPlayerReady(){
    let observable = new Observable(observer => {
  
     
      this.socket.on('otherPlayerReady', (data) => {
        observer.next(data);    
      });
      return () => {
        //this.socket.disconnect();
      };  
    })     
    return observable;
  }

  countDownTimer(seconds:number){
    let timer=Observable
  .timer(100, 1000) // timer(firstValueDelay, intervalBetweenValues)
  .map(i => seconds - i)
  .take(seconds + 1);
  return timer;

}

sendRoundData(data){
   
    this.socket.emit("roundData",data);
  }

onVotingStart(){
    let observable = new Observable(observer => {
  
     
      this.socket.on('startVoting', (data) => {
        observer.next(data);    
      });
      return () => {
        //this.socket.disconnect();
      };  
    })     
    return observable;
  }

  
}
