import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { ShareService} from '../services/share.service';
import { Storage } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { Platform } from '@ionic/angular';

import { SQLite, SQLiteObject, SQLiteDatabaseConfig} from '@ionic-native/sqlite';


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
  private databaseReady: BehaviorSubject<boolean>;
  public acrostics_database: SQLiteObject;
  //public misc_database: SQLiteObject;
  public animals: Array<Object>;
  //public counter : number = 0;

  constructor(public shared: ShareService, private nav: NavController, private platform: Platform, public popoverCtrl: PopoverController, public service:ShareService, public storage: Storage, private sqlite: SQLite, public sqlitePorter: SQLitePorter, private http: Http){
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      console.log("home.page.ts constructor platform.ready called!");
      this.sqlite.create({
        name: 'acrostics.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.acrostics_database = db;
        //this.storage.set('database_filled', false);
        this.storage.get('database_filled').then(val => {
          if (val) {
            this.databaseReady.next(true);
          } else {
            this.fillDatabase();
          }
        });
      });
    });
    //this.myStorage = storage;
    //this.myShared = shared;
  }

  fillDatabase() {
    this.http.get('assets/sql/acrostics.sql')
    .map(res => res.text())
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.acrostics_database, sql)
      .then(data => {
        this.databaseReady.next(true);
        this.storage.set('database_filled', true);
        this.acrostics_database.executeSql("SELECT * FROM animals", []).then((data) => {
          //this.animals = [];
          if(data.rows.length > 0) {
            for(var i = 0 ; i < data.rows.length ; i++) {
              console.log("Acrostics name=(" + i + ")=" + data.rows.item(i).Name);
              //this.animals.push({ Name: data.rows.item(i).Name });
            }
          }
        }, (error) => {
          console.log("ERROR: " + JSON.stringify(error));
        }
      );
    } )
    .catch(e => console.error(e));
  });
}

ngOnInit() {
  console.log("home.page.ts ngOnInit called.");
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

ionViewDidEnter(){
  console.log('ionViewDidEnter called');
  /*
  this.sqlite.create({name: "acrostics.db", location: "default"}).then((db : SQLiteObject) => {
  this.acrostics_database = db;
  //this.createTable();
}, (error) => {
console.log("ERROR: ", error);
});
*/
}


public createTable(){
  /*
  this.acrostics_database.executeSql('create table if not exists invoices(name VARCHAR(32))', {})
  .then(() => {
  console.log('Table Invoice created !');

})
.catch(e => console.log(e));
*/
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
