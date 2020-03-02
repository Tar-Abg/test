import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  comentsArray = [
    {
      name: 'Adam Smith',
      date: 'Oct 29 16:47',
      text: 'Very good job!',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/adam.png'
    },
    {
      name: 'James Stewart',
      date: 'Oct 29 16:47',
      text: null,
      ComentImg: '../../../assets/images/coments/com.png',
      userPicture:'../../..//assets/images/coments/James.png'
    },
    {
      name: 'Andrew Ralphen-Sow',
      date: 'Oct 29 16:47',
      text: 'Lets get together!!!',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/Andreq.png'
    },
    {
      name: 'Elisabeth Jefferson',
      date: 'Oct 29 16:47',
      text: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/Elisabeth.png'
    },
    {
      name: 'Adam Smith',
      date: 'Oct 29 16:47',
      text: 'Very good job!',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/adam.png'
    },
    {
      name: 'James Stewart',
      date: 'Oct 29 16:47',
      text: 'I am glad that some foundation is trying to make our city more beautiful',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/JamesS.png'
    },
    {
      name: 'Andrew Ralphen-Sow',
      date: 'Oct 29 16:47',
      text: 'Lets get together!!!!',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/AndrewR.png'
    },
    {
      name: 'Anna Jefferson',
      date: 'Oct 29 16:47',
      text: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      ComentImg: null,
      userPicture:'../../../assets/images/coments/Anna.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
