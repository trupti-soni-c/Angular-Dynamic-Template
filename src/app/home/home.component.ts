import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title='Hello, welcome to';
  centerArray=[{'title':'Hello, welcome to','class':'welcome-first animate'}];
  centertitle=[{'title':'elegance','class':'welcome-title animate'}];
              
  centercontext=[{'title':'This is a clean and modern Angular template with a video background. You can use this layout for your profile page. Please spread a word about templatemo to your friends. Thank you.',class:'animate'}]          
  divtext=[{'title':'Scroll Down','class':'scroll-down next-section animate','src':'assets/images/mouse-scroll.png'}];
  constructor() { }

  ngOnInit(): void {
  }

}
