import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contact=[{title:'Contact ',h2text:'Get In Touch!'}];
  info=[{'address':'123 New Street Here, Wonderful City 10220','phone':'090 080 0210','site':'info@company.com'}];
  constructor() { }

  ngOnInit(): void {
  }

}
