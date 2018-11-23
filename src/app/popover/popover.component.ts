import { Component, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

   popoverCtrl: PopoverController;
   colors: any;
   buttons: any;
   message = '';
   buttonColor:any;
   homePageContent:ElementRef;

    constructor(public navParams: NavParams) {
      this.homePageContent = navParams.get('homePageContent');
      console.log("Passed homePageContent=" + JSON.stringify(this.homePageContent));
      this.message = navParams.get('message');
      this.buttonColor = navParams.get("buttonColor");
      this.popoverCtrl = navParams.get('popoverController');
    }

    close() {
      this.popoverCtrl.dismiss();
    }

    changeBackgroundColor(item){
      console.log("changeBackgroundColor called item=" + JSON.stringify(item));
      this.homePageContent.nativeElement.style.backgroundColor = item.hex;
    }

    changeButtonColor(item){
      console.log("changeButtonColor called item=" + JSON.stringify(item));
      this.buttonColor = item.value;
    }

    sync(isSync){
      console.log("sync called isSync=" + isSync);
    }

  ngOnInit() {
    this.colors=[
      {color:'BLACK', hex:"#000000"},
      {color:'CYAN', hex:"#00FFFF"},
      {color:'GREEN', hex:"#00FF00"},
      {color:'GRAY', hex:"#E1E1E1"},
      {color:'MAGENTA', hex:"#FF00FF"},
      {color:'RED', hex:"#FF0000"},
      {color:'WHITE', hex:"#FFFFFF"},
      {color:'YELLOW', hex:"#FFFF00"},
    ];
    this.buttons=[
      {color:'GREEN', value:"secondary"},
      {color:'RED', value:"danger"},
      {color:'LIGHT GRAY', value:"light"},
    ];
  }

}
