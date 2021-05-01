import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  about=[{title:'About Me',h2text:'Who am i?','ptag':'Credits go to','strongtag':'Unsplash','strongtag2':'Pexels','ptag2':'for photos and video used in this template. Vivamus tincidunt, augue rutrum convallis volutpat, massa lacus tempus leo.'}];
  box1=[{'class':'fa fa-trophy counter-icon','no':'32','title':' Awards Won'}];
  box2=[{'class':'fa fa-graduation-cap counter-icon,','no':'4','title':'Degree'}];
  box3=[{'class':'fa fa-desktop counter-icon','no':'12','title':'Working Years'}];
  box4=[{'class':'fa fa-support counter-icon','no':'6','title':' Team Members'}];
  box5=[{'class':'fa fa-certificate counter-icon','no':'10','title':'Certificates'}];
  aboutme_image=[{'src':'assets/images/profile-girl.jpg'}];
  constructor() { }

  ngOnInit(): void {
  }

}
