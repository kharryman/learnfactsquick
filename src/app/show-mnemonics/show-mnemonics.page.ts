import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-mnemonics',
  templateUrl: './show-mnemonics.page.html',
  styleUrls: ['./show-mnemonics.page.scss'],
})
export class ShowMnemonicsPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
