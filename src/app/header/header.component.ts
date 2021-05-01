import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo=" Elegance";
  navigationArray=[ {'menulink':'#slide01','menuname':'Home','data-menuanchor':'slide01'},
                    {'menulink':'#slide02','menuname':'About Me','data-menuanchor':'slide02'},
                    {'menulink':'#slide03','menuname':'Services','data-menuanchor':'slide03'},
                    {'menulink':'#slide04','menuname':'My Skills','data-menuanchor':'slide04'},
                    {'menulink':'#slide05','menuname':'My Work','data-menuanchor':'slide05'},
                    {'menulink':'#slide06','menuname':'Testimonials','data-menuanchor':'slide06'},
                    {'menulink':'#slide07','menuname':'Contact Me','data-menuanchor':'slide07'}
];
}
