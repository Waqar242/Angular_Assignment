import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  cardsList: any[] = [ 
    {
      title:'345',
      icon:'shopping_cart',
      amount:'Total Orders'
    },
    {
      title:'345',
      icon:'calculate',
      amount:'Total Expenses'
    },
    {
      title:'345',
      icon:'assessment',
      amount:'Total Revenue'
    },
    {
      title:'345',
      icon:'person',
      amount:'New Users'
    }
    ]

    blogsList: any[] = [ 
      {
        title:'Lorem ipsum dolor sit amet',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L4HgF6cEpse1SoWbguEMXMaWiOiG0Ml3wy_U6366d2IjCTvaPJ28e-UnTk9fYM1BpHk&usqp=CAU",
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Present euismod fringilla nulla nec bibendum Cras ut volutpat lectus'
      },
      {
        title:'Lorem ipsum dolor sit amet',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L4HgF6cEpse1SoWbguEMXMaWiOiG0Ml3wy_U6366d2IjCTvaPJ28e-UnTk9fYM1BpHk&usqp=CAU",
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Present euismod fringilla nulla nec bibendum Cras ut volutpat lectus'
      },
      {
        title:'Lorem ipsum dolor sit amet',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L4HgF6cEpse1SoWbguEMXMaWiOiG0Ml3wy_U6366d2IjCTvaPJ28e-UnTk9fYM1BpHk&usqp=CAU",
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Present euismod fringilla nulla nec bibendum Cras ut volutpat lectus'
      },
      {
        title:'Lorem ipsum dolor sit amet',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L4HgF6cEpse1SoWbguEMXMaWiOiG0Ml3wy_U6366d2IjCTvaPJ28e-UnTk9fYM1BpHk&usqp=CAU",
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Present euismod fringilla nulla nec bibendum Cras ut volutpat lectus'
      }
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
