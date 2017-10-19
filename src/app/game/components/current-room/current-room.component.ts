import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'npt-current-room',
  templateUrl: './current-room.component.html',
  styleUrls: ['./current-room.component.css']
})
export class CurrentRoomComponent implements OnInit {
  @Input() playerList;
  constructor() { }

  ngOnInit() {
  }

}
