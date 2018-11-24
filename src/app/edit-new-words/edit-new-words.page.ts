import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-edit-new-words',
  templateUrl: './edit-new-words.page.html',
  styleUrls: ['./edit-new-words.page.scss'],
})
export class EditNewWordsPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
