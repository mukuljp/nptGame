import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'npt-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 @Input() playerName:string
  constructor() { }

  ngOnInit() {
  }

}
