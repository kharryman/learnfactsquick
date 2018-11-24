import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-acrostics',
  templateUrl: './acrostics.page.html',
  styleUrls: ['./acrostics.page.scss'],
})
export class AcrosticsPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
