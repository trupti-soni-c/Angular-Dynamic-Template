import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services=[{title:'Services',h2text:'What I Do?'}];
  h3=[{'class':'Bootstrap Themes','content':' Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam.'}];
  box2=[{'class':'fa fa-graduation-cap counter-icon,','no':'4','title':'Degree'}];
  box3=[{'class':'fa fa-desktop counter-icon','no':'12','title':'Working Years'}];
  box4=[{'class':'fa fa-support counter-icon','no':'6','title':' Team Members'}];
  box5=[{'class':'fa fa-certificate counter-icon','no':'10','title':'Certificates'}];
  aboutme_image=[{'src':'assets/images/profile-girl.jpg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
