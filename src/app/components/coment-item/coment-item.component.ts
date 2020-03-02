import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coment-item',
  templateUrl: './coment-item.component.html',
  styleUrls: ['./coment-item.component.css']
})
export class ComentItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
