import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  people: Array<{ fname: string, lname: string, xquote: string, xhobbies: string, xlanguage: string, byear: number, job: string, img1: string, img2: string}> = [
    {
      fname: "Gabriel",
      lname: "Skraba ",
      byear: 98,
      xhobbies: "music, coding" ,
      xlanguage:"Croatian, English, German",
      xquote: " Just rock'n'roll ",
      job: "Frontend Development, 3D modeling",
      img1: "/assets/images/about/gabi1.jpg",
      img2: "/assets/images/about/gabi.png",
     
  
    },
    {
      fname: "Tamara",
      lname: "Zolnajic",
      byear: 97,
      xhobbies: "gaming, coding, traveling, listening to music" ,
      xlanguage:"Serbocroatian, English, German",
      xquote: " Live in the moment, but don't take anything for granted. ",
      job: "Frontend Development, Python, Video-Editing/Photoshop, ECDL",
      img1: "/assets/images/about/tamara1.jpg",
      img2: "/assets/images/about/tamara.JPG",
     
  
    },
    {
      fname: "Andrea",
      lname: "Bicskei ",
      byear: 94,
      xhobbies: "reading, music production, traveling" ,
      xlanguage:"Hungarian, Serbian, English, German",
      xquote: " It matters not when someone is born, but what they grow to be. ",
      job: "Frontend Development,C++ ,Unreal engine, Video-Editing/Photoshop, Unity",
      img1: "/assets/images/about/andrea1.jpg",
      img2: "/assets/images/about/andrea.jpg",
     
  
    },
    {
      fname: "Branko",
      lname: "Babic ",
      byear: 91,
      xhobbies: "coding, sports, traveling" ,
      xlanguage:"Slovenian, Serbian, English, German",
      xquote: " GOD will never give you more than you can handle. ",
      job: "Frontend Development, AutoCAD 3D",
      img1: "/assets/images/about/bati1.jpg",
      img2: "/assets/images/about/Bati.jpg",
     
  
    },
    
    
    
  
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
