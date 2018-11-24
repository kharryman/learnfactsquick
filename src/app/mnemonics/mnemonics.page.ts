import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-mnemonics',
  templateUrl: './mnemonics.page.html',
  styleUrls: ['./mnemonics.page.scss'],
})
export class MnemonicsPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
