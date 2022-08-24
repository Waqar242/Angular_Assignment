import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-cards',
  templateUrl: './blogs-cards.component.html',
  styleUrls: ['./blogs-cards.component.sass']
})
export class BlogsCardsComponent implements OnInit {

  @Input() card: any;

  seeMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
