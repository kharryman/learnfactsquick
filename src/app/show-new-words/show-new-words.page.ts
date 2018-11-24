import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-new-words',
  templateUrl: './show-new-words.page.html',
  styleUrls: ['./show-new-words.page.scss'],
})
export class ShowNewWordsPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
