import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  people: Array<{ fname: string, lname: string, xquote: string, xhobbies: string, xlanguage: string, byear: number, job: string, img1: string, img2: string}> = [

    {
      fname: "Andrea",
      lname: "Bicskei",
      byear: 94,
      xhobbies: "reading, music production, traveling" ,
      xlanguage:"Hungarian, Serbian, English, German",
      xquote: "it matters not what someone is born, but what thex grow to be.",
      job: "Frontend Development, c++ , Unreal engine",
      img1: "/assets/images/about/andrea1.jpg",
      img2: "/assets/images/about/andrea.jpg",
     
  
    },
    {
      fname: "Branko",
      lname: "Babic",
      byear: 91,
      xhobbies: "coding, sports, traveling" ,
      xlanguage:"Slovenian, Serbian, English, German",
      xquote: "GOD will never give u more than u can handle",
      job: "Frontend Development, AutoCAD 3D",
      img1: "/assets/images/about/bati1.jpg",
      img2: "/assets/images/about/Bati.jpg",
     
  
    },
    {
      fname: "Gabriel",
      lname: "Skraba",
      byear: 98,
      xhobbies: "music, " ,
      xlanguage:"Croatian, English, German",
      xquote: "just rock n roll",
      job: "Frontend Development, 3D modeling",
      img1: "/assets/images/about/gabi1.jpg",
      img2: "/assets/images/about/gabi.png",
     
  
    },
    {
      fname: "Tamara",
      lname: "Zolnajic",
      byear: 94,
      xhobbies: "reading, music production, traveling" ,
      xlanguage:"Hungarian, Serbian, English, German",
      xquote: "it matters not what someone is born, but what thex grow to be.",
      job: "Frontend Development, c++",
      img1: "/assets/images/about/tamara1.jpg",
      img2: "/assets/images/about/tamara.JPG",
     
  
    }
    
  
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
