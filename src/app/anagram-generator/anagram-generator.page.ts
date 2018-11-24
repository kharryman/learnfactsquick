import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-anagram-generator',
  templateUrl: './anagram-generator.page.html',
  styleUrls: ['./anagram-generator.page.scss'],
})
export class AnagramGeneratorPage implements OnInit {

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
  }

}
