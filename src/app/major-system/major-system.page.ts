import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-major-system',
  templateUrl: './major-system.page.html',
  styleUrls: ['./major-system.page.scss'],
})
export class MajorSystemPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
