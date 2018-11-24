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
  //myStorage:Storage;
  myShared:any;

  constructor(public shared: ShareService, private nav: NavController, public popoverCtrl: PopoverController, public service:ShareService, public storage: Storage){
    //this.myStorage = storage;
    //this.myShared = shared;
  }

  ngOnInit() {
    //if (this.myStorage.get("button_color") == null){
    //   console.log("SETTING COLOR TO DEFAULT SECONDARY.")
    this.home = {color:"secondary"};
    //}else{
    //  this.home = {color:this.myStorage.get("button_color")};
    //}
    //this.myShared.setButtonColor(this.home);
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
          this.nav.navigateRoot('Acrostics');
          console.log("goAcrostics called.");
          this.nav
        }
        goAcrosticsTables(){
          console.log("goAcrosticsTables called.");
          this.nav.navigateRoot('AcrosticsTables');
        }
        goAlphabet(){
          console.log("goAlphabet called.");
          this.nav.navigateRoot('Alphabet');
        }
        goMajorSystem(){
          console.log("goMajorSystem called.");
          this.nav.navigateRoot('MajorSystem');
        }
        goNewWords(){
          console.log("goNewWords called.");
          this.nav.navigateRoot('ShowNewWords');
        }
        goCelebrityNumbers(){
          console.log("goCelebrityNumbers called.");
          this.nav.navigateRoot('CelebrityNumbers');
        }
        goDictionary(){
          console.log("goDictionary called.");
          this.nav.navigateRoot('Dictionary');
        }
        goMnemonics(){
          console.log("goMnemonics called.");
          this.nav.navigateRoot('Mnemonics');
        }
        goAnagramGenerator(){
          console.log("goAnagramGenerator called.");
          this.nav.navigateRoot('AnagramGenerator');
        }
        goEvents(){
          console.log("goEvents called.");
          this.nav.navigateRoot('Events');
        }
        goNumbers(){
          console.log("goNumbers called.");
          this.nav.navigateRoot('Numbers');
        }
        goMnemonicGenerator(){
          console.log("goMnemonicGenerator called.");
          this.nav.navigateRoot('MnemonicGenerator');
        }
        goShowMnemonics(){
          console.log("goShowMnemonics called.");
          this.nav.navigateRoot('ShowMnemonics');
        }
        goTimeline(){
          console.log("goTimeline called.");
          this.nav.navigateRoot('Timeline');
        }
        goShowDictionary(){
          console.log("goShowDictionary called.");
          this.nav.navigateRoot('ShowDictionary');
        }
        goShowNumbers(){
          console.log("goShowNumbers called.");
          this.nav.navigateRoot('ShowNumbers');
        }
        goTables(){
          console.log("goTables called.");
          this.nav.navigateRoot('Tables');
        }
        goEditNewWords(){
          console.log("goEditNewWords called.");
          this.nav.navigateRoot('EditNewWords');
        }
        goHelp(){
          console.log("goHelp called.");
          this.nav.navigateRoot('Help');
        }
      }
