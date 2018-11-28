import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-dictionary',
  templateUrl: './show-dictionary.page.html',
  styleUrls: ['./show-dictionary.page.scss'],
})
export class ShowDictionaryPage implements OnInit {

  showDictionary:any;
  @ViewChild('showDictionaryResults') showDictionaryResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.showDictionary = {};
    this.showDictionary.isOneWord=false;
    this.showDictionary.and_input="";
    this.showDictionary.or_input="";
    this.showDictionary.nor_input="";
    this.showDictionary.color = "secondary";
  }

  getDictionaryResults(){
    console.log("getDictionaryResults called");
  }

}
