import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.sass']
})
export class UsersCardsComponent implements OnInit {

  @Input() card: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
