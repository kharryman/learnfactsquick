import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-mnemonic-generator',
  templateUrl: './mnemonic-generator.page.html',
  styleUrls: ['./mnemonic-generator.page.scss'],
})
export class MnemonicGeneratorPage implements OnInit {
  mnemonicGenerator:any;
  @ViewChild('mnemonicGeneratorResults') mnemonicGeneratorResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.mnemonicGenerator = {};
    this.mnemonicGenerator.input = "";
    this.mnemonicGenerator.themes=[
      {text:"theme1"},
      {text:"theme2"},
      {text:"theme3"},
    ];
    this.mnemonicGenerator.adjectives=[
      {text:"adjective1"},
      {text:"adjective2"},
      {text:"adjective3"},
    ];
    this.mnemonicGenerator.color = "secondary";
  }

  makeMnemonics(){
    console.log("makeMnemonics called.");
  }

}
