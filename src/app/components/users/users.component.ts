import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  usersList: any;  // to store users
  check: boolean = true;  // for toggle between list and grid view
  displayedColumns: string[] = ['id', 'name', 'username', 'date']; //columns for users table

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  dataSource: any;

  constructor(private http: HttpClient) {

  }
  
  ngOnInit(): void {
    this.getData().subscribe(next=>{
      this.usersList = next;
      this.dataSource = this.usersList;
      console.log(this.usersList)
    })
  }

  // Function to retrieve data
  getData():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  // Filter Function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Toggle Function
  onValChange(value: string){
    if(value == 'list')
    {
      this.check = !this.check;
    }
    else if('grid')
    {
      this.check = !this.check;
    }
  }
}



