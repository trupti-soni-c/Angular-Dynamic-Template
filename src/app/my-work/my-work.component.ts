import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  heading=[{title:'My Work',h2text:'what i’ve done?'}];
  imagearray=[{'image':'assets/images/item-1.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-2.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-3.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-1.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-2.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-3.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-1.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-2.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
              {'image':'assets/images/item-3.jpg','h4':'templatemo is the best','p':'Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.'},
            ];
  constructor() { }

  ngOnInit(): void {
  }

  

}
