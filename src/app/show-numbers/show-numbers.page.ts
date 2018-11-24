import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-numbers',
  templateUrl: './show-numbers.page.html',
  styleUrls: ['./show-numbers.page.scss'],
})
export class ShowNumbersPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
