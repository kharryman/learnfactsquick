import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { ShareService} from '../services/share.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit{
  @ViewChild('homePageContent') homePageContent:ElementRef;
  home:any;
  myStorage:Storage;
  myShared:any;

  constructor(public shared: ShareService, private nav: NavController, public popoverCtrl: PopoverController, public service:ShareService, public storage: Storage){
    this.myStorage = storage;
    this.myShared = shared;
  }

  ngOnInit() {
    if (this.myStorage.get("button_color") == null){
       console.log("SETTING COLOR TO DEFAULT SECONDARY.")
       this.home = {color:"secondary"};
    }else{
      this.home = {color:this.myStorage.get("button_color")};
    }
    this.myShared.setButtonColor(this.home);
  }
  ngAfterViewInit() {
    //this.homePageContent.nativeElement.style.backgroundColor = "#FF0000";
  }
  chooseSync(event: Event){
    console.log("chooseSync called.");
    return this.popoverCtrl.create({ component: PopoverComponent, event: event,
      componentProps: {homePageContent: this.homePageContent, buttonColor: this.home, message: 'SYNC', popoverController: this.popoverCtrl} })
      .then(popover => popover.present());
    }
    chooseBackground(event: Event): Promise<void> {
      console.log("chooseBackground called. event=" + JSON.stringify(event));
      return this.popoverCtrl.create({ component: PopoverComponent, event: event,
        componentProps: {homePageContent: this.homePageContent, message: 'BACKGROUND', popoverController: this.popoverCtrl} })
        .then(popover => popover.present());
      }

      chooseButton(event: Event){
        console.log("chooseButton called.");
        return this.popoverCtrl.create({ component: PopoverComponent, event: event,
          componentProps: {homePageContent: this.homePageContent, message: 'BUTTON', popoverController: this.popoverCtrl} })
          .then(popover => popover.present());
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
