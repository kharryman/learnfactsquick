import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-numbers',
  templateUrl: './show-numbers.page.html',
  styleUrls: ['./show-numbers.page.scss'],
})
export class ShowNumbersPage implements OnInit {
  yourNumbers:any;
  @ViewChild('yourNumbersLoginStatus') yourNumbersLoginStatus:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.yourNumbers = {};
    this.yourNumbers.color = "secondary";
  }
  login(){
    //
  }
  logout(){
    console.log("logout called");
  }

  getNumbers(){
    console.log("getNumbers called");
    console.log("getNumbers isShared=" + this.yourNumbers.isShared);
  }

}
