import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donations-item',
  templateUrl: './donations-item.component.html',
  styleUrls: ['./donations-item.component.css']
})
export class DonationsItemComponent implements OnInit {
  @Input() donor; 
  constructor() { }

  ngOnInit() {
  }

}
