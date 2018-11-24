import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-acrostics-tables',
  templateUrl: './acrostics-tables.page.html',
  styleUrls: ['./acrostics-tables.page.scss'],
})
export class AcrosticsTablesPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
