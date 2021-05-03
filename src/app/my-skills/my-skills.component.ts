import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {
  myskills=[{title:'My Skills',h2text:'What i’m good?'}];
  itemarray=[{'h6':'HTML CSS','span':'70%'},{'h6':'PSD Design','span':'90%'},{'h6':'Social Media','span':'70%'},{'h6':'Leadership','span':'90%'}];
  constructor() { }

  ngOnInit(): void {
  }

               
}
