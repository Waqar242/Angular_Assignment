import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {

  // list to store blogs
  list: any; 
  // Using http client to get data 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData().subscribe(next=>{
      this.list = next;
      console.log(this.list)
    })
  }

  // Function to retrieve blogs
  getData():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

}
