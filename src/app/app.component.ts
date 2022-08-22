import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-Assignment';
  visible: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth < 800){
      this.visible = false;
    }else{
      this.visible = true;
    } 
  }
}
