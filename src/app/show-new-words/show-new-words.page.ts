import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-show-new-words',
  templateUrl: './show-new-words.page.html',
  styleUrls: ['./show-new-words.page.scss'],
})
export class ShowNewWordsPage implements OnInit {
  showNewWords:any;
  @ViewChild('showNewWordsResults') showNewWordsResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.showNewWords = {};
    this.showNewWords.username = "";
    this.showNewWords.password = "";
    this.showNewWords.days_before = 0;
  }

}
