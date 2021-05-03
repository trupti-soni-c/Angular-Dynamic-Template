import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services=[{title:'Services',h2text:'What I Do?'}];
  h3=[{'class':'Bootstrap Themes','content':' Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam.'},
      {'class':'HTML5 Coding','content':' Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam.'},
      {'class':'Fully Responsive','content':'Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. '},
      {'class':'Mobile Ready','content':'Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. '},
      {'class':'24-hour Up Time','content':'Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam.'},
      {'class':'Instant Upgrades','content':'Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. '},
      {'class':'Always Monitoring','content':'Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. '}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
