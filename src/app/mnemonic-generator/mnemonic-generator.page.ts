import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-mnemonic-generator',
  templateUrl: './mnemonic-generator.page.html',
  styleUrls: ['./mnemonic-generator.page.scss'],
})
export class MnemonicGeneratorPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
