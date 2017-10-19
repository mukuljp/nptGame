import { GameDataService } from './../../shared/services/game-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameDataService:GameDataService) {
  
   }

  ngOnInit() {
    console.log(this.gameDataService.getConfig());
    
  }

}
