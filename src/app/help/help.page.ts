import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  menus:any;
  constructor(public popoverCtrl: PopoverController, private nav: NavController) { }

  chooseSync(event: Event){
    console.log("chooseSync called.");
    return this.popoverCtrl.create({ component: PopoverComponent, event: event,componentProps: {homePageContent: this.homePageContent, buttonColor: this.home, message: 'SYNC', popoverController: this.popoverCtrl} }).then(popover =>popover.present());
  }
  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.menus=[
      {name:"GENERAL",isShow:false},
      {name:"EDIT",isShow:false,
      edits:[
        {name:"EDIT ACROSTICS",isShow:false},
        {name:"EDIT ALPHABET",isShow:false},
        {name:"EDIT DICTIONARY",isShow:false},
        {name:"EDIT EVENTS",isShow:false},
        {name:"EDIT MNEMONICS",isShow:false},
        {name:"EDIT NUMBERS",isShow:false},
        {name:"EDIT TABLES",isShow:false},
        {name:"EDIT NEWWORDS",isShow:false}
      },
      {name:"SHOW",isShow:false,
      shows:[
        {name:"ACROSTIC TABLES",isShow:false},
        {name:"SHOW NEWWORDS",isShow:false},
        {name:"SHOW MNEMONICS",isShow:false},
        {name:"SHOW NUMBERS",isShow:false},
        {name:"TIMELINE",isShow:false}
      ]
    },
    {name:"TOOLS",isShow:false,
    tools:[
      {name:"MAJOR SYSTEM",isShow:false},
      {name:"CELEBRITY NUMBERS",isShow:false},
      {name:"ANAGRAMS",isShow:false},
      {name:"MNEMONIC GENERATOR",isShow:false},
      {name:"DICTIONARY",isShow:false}
    ]
  },
  {name:"USERS",isShow:false}
];
}

expand(item){
  item.isShow = !item.isShow;
}

}
