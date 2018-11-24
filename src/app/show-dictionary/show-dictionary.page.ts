import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-dictionary',
  templateUrl: './show-dictionary.page.html',
  styleUrls: ['./show-dictionary.page.scss'],
})
export class ShowDictionaryPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
