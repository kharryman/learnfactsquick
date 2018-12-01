import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  timeline:any;
  //@ViewChild('timelineResults') timelineResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.timeline = {};
    this.timeline.username = "";
    this.timeline.password = "";
    this.timeline.completed = [
      {text:"Complete1"},
      {text:"Complete2"},
      {text:"Complete3"}
    ];
    this.timeline.major_counts = [
      {text:"Count1"},
      {text:"Count2"},
      {text:"Count3"}
    ];
  }

  login(){
  }
  logout(){
  }

}
