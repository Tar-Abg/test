import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    console.log("scrolling");
  } 
  constructor() { }

  ngOnInit() {
  }

}
