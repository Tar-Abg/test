import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations-box',
  templateUrl: './donations-box.component.html',
  styleUrls: ['./donations-box.component.css']
})
export class DonationsBoxComponent implements OnInit {
  public donors = [{
    name: 'Eleonora',
    surName: 'Saimon',
    quantity:60,
    donateDate: '22 Oct 16:04',
    pictureUrl: '../../../assets/images/donors/donor1.png'
  },
  {
    name: 'Anna',
    surName: 'Smith',
    quantity:40,
    donateDate: '22 Oct 15:07',
    pictureUrl: '../../../assets/images/donors/donor2.png'
  },
  {
    name: 'Roven',
    surName: 'Joseph Smith',
    quantity:50,
    donateDate: '22 Oct 10:49',
    pictureUrl: '../../../assets/images/donors/donor3.png'
  },
  {
    name: 'Eleonora',
    surName: 'Saimon',
    quantity:70,
    donateDate: '21 Oct 22:17',
    pictureUrl: '../../../assets/images/donors/donor4.png'
  },
  {
    name: 'Tontri',
    surName: 'Qutier',
    quantity:80,
    donateDate: '21 Oct 15:09',
    pictureUrl: '../../../assets/images/donors/donor2.png'
  },
  {
    name: 'Gillian',
    surName: 'Silence',
    quantity:150,
    donateDate: '21 Oct 10:08',
    pictureUrl: '../../../assets/images/donors/donor5.png'
  }
   

  ]
  constructor() { }

  ngOnInit() {
  }

}
