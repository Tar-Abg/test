import { Component, HostListener } from '@angular/core';
import { ScrollService } from './services/scroll.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event.target.scrollTop);
    this.scrollService.setScroll($event.target.scrollTop)
  }
  constructor(private scrollService:ScrollService){

  }
}
