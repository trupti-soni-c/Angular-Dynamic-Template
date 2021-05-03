import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  heading=[{title:'TESTIMONIALS',h2text:'what THEY SAY?'}];
  testinomial=[{'image':'assets/images/profile-01.jpg','h4':'Sandar','p':'"Ut varius leo eu mauris lacinia, eleifend posuere urna gravida. Aenean a mattis lacus."','span':'Managing Director'},
              {'image':'assets/images/profile-01.jpg','h4':'Shinn','p':'"Etiam efficitur, tortor facilisis finibus semper, diam magna fringilla lectus, et fringilla felis urna posuere tortor."','span':'CEO and Founder'},
              {'image':'assets/images/profile-01.jpg','h4':'"Etiam efficitur, tortor facilisis finibus semper, diam magna fringilla lectus, et fringilla felis urna posuere tortor."','p':'Chief Marketing Officer','span':'Chief Marketing Officer'}
            ];
  constructor() { }

  ngOnInit(): void {
  }

}
