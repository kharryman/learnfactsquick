import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-celebrity-numbers',
  templateUrl: './celebrity-numbers.page.html',
  styleUrls: ['./celebrity-numbers.page.scss'],
})
export class CelebrityNumbersPage implements OnInit {
  inputNumbers:any;
  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
