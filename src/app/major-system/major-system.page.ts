import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-major-system',
  templateUrl: './major-system.page.html',
  styleUrls: ['./major-system.page.scss'],
})
export class MajorSystemPage implements OnInit {
  major:any;
  @ViewChild('majorResults') majorResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.major = {};
    this.major.useBeginningLetters=false;
    this.major.isEveryLetter=false;
    this.major.input="";
    this.major.color = "secondary";
  }

  makeMajor(){
    console.log("makeMajor called.");
  }

}
