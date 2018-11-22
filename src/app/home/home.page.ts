import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  template: `This is a popover`
})
export class MyPopover{}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private nav: NavController, public popoverCtrl: PopoverController){

  }
  chooseSync(){
    console.log("chooseSync called.");
  }
  chooseBackground(event: Event){
    console.log("chooseBackground called. event=" + JSON.stringify(event));
    let popover =this.popoverCtrl.create(MyPopover);
    this.present(popover, {
      ev: Event
    });
  }
  chooseButton(){
    console.log("chooseButton called.");
  }
  goAcrostics(){
    console.log("goAcrostics called.");
  }
  goAcrosticsTables(){
    console.log("goAcrosticsTables called.");
  }
  goAlphabet(){
    console.log("goAlphabet called.");
  }
  goMajorSystem(){
    console.log("goMajorSystem called.");
  }
  goNewWords(){
    console.log("goNewWords called.");
  }
  goCelebrityNumbers(){
    console.log("goCelebrityNumbers called.");
  }
  goDictionary(){
    console.log("goDictionary called.");
  }
  goMnemonics(){
    console.log("goMnemonics called.");
  }
  goAnagramGenerator(){
    console.log("goAnagramGenerator called.");
  }
  goEvents(){
    console.log("goEvents called.");
  }
  goNumbers(){
    console.log("goNumbers called.");
  }
  goMnemonicGenerator(){
    console.log("goMnemonicGenerator called.");
  }
  goShowMnemonics(){
    console.log("goShowMnemonics called.");
  }
  goTimeline(){
    console.log("goTimeline called.");
  }
  goShowDictionary(){
    console.log("goShowDictionary called.");
  }
  goShowNumbers(){
    console.log("goShowNumbers called.");
  }
  goTables(){
    console.log("goTables called.");
  }
  goEditNewWords(){
    console.log("goEditNewWords called.");
  }
  goHelp(){
    console.log("goHelp called.");
  }
}
