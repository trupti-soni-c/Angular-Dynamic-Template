import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  socialmediaArray=[ {'href':'https://www.facebook.com/','title':'Facebook','class':'fa fa-facebook','target':'_blank'},
                      {'href':'https://twitter.com/" target="_blank','title':'Twitter','class':'fa fa-twitter','target':'_blank'},
                      {'href':'http://www.linkedin.com/','title':'Linkedin','class':'fa fa-linkedin','target':'_blank'},
                      {'href':'https://www.instagram.com/','title':'Instagram','class':'fa fa-behance','target':'_blank'}
                     
]; // display social media right side menu in site
  constructor() { }

  ngOnInit(): void {
  }


}
