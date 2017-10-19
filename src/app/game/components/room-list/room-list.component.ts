import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'npt-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
@Input() rooms;
@Output() onJoin= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  joinGame(gameRoomName){
    this.onJoin.emit(gameRoomName);
  }
}
