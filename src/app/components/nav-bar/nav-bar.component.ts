import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit { 
  public activeRout: string = "about"
  public scrollTop: number = 0;

  constructor(private scrollService: ScrollService) { 
    this.scrollService.onScroll$().subscribe(scrollTop => {
      this.scrollTop = scrollTop;
    })
  }

  ngOnInit() {
  }
  
  changActiveRout(raout) {
    this.activeRout = raout;
  }



}
