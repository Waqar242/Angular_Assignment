import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserData {
  id: string;
  name: string;
  username: string;
  date: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements AfterViewInit {
  usersList: any;
  check: boolean = true;
  displayedColumns: string[] = ['id', 'name', 'username', 'date'];


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

  getData():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
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



