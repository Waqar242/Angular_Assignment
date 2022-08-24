import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-blogs-cards',
  templateUrl: './recent-blogs-cards.component.html',
  styleUrls: ['./recent-blogs-cards.component.sass']
})
export class RecentBlogsCardsComponent implements OnInit {

  @Input() card: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
