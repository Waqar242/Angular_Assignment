import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.sass']
})
export class DashboardCardsComponent implements OnInit {

  @Input() card: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
