import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-acrostics-tables',
  templateUrl: './acrostics-tables.page.html',
  styleUrls: ['./acrostics-tables.page.scss'],
})
export class AcrosticsTablesPage implements OnInit {
  acrosticsTables:any;
  @ViewChild('acrosticsTables') acrosticsTablesResults:ElementRef;

  constructor(private nav: NavController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  setUnchecked(whichField){
    console.log("setUnchecked called, whichField=" + whichField);
    if(whichField==='Information'){
      if(this.acrosticsTables.isInformation===true){
        this.acrosticsTables.isInformationComplete = false;
        this.acrosticsTables.isInformationIncomplete = false;
      }
    }
    if(whichField==='Acrostics'){
      if(this.acrosticsTables.isAcrostics===true){
        this.acrosticsTables.isAcrosticsComplete = false;
        this.acrosticsTables.isAcrosticsIncomplete = false;
      }
    }
    if(whichField==='Mnemonics'){
      if(this.acrosticsTables.isMnemonics===true){
        this.acrosticsTables.isMnemonicsComplete = false;
        this.acrosticsTables.isMnemonicsIncomplete = false;
      }
    }
    if(whichField==='Images'){
      if(this.acrosticsTables.isImages===true){
        this.acrosticsTables.isImagesComplete = false;
        this.acrosticsTables.isImagesIncomplete = false;
      }
    }
    if(whichField==='Peglist'){
      if(this.acrosticsTables.isPeglist===true){
        this.acrosticsTables.isPeglistComplete = false;
        this.acrosticsTables.isPeglistIncomplete = false;
      }
    }
  }

  setChecked(category, whichField){
    console.log("setChecked called, whichField=" + whichField);
    if(whichField===false){
       if(category==="Information"){
          this.acrosticsTables.isInformation = true;
       }
       if(category==="Acrostics"){
          this.acrosticsTables.isAcrostics = true;
       }
       if(category==="Mnemonics"){
          this.acrosticsTables.isMnemonics = true;
       }
       if(category==="Images"){
          this.acrosticsTables.isImages = true;
       }
       if(category==="Peglist"){
          this.acrosticsTables.isPeglist = true;
       }
    }
  }

  ngOnInit() {
    this.acrosticsTables = {};
    this.acrosticsTables.table;
    this.acrosticsTables.isRead = false;
    this.acrosticsTables.showAllCategories = false;
    //SHOW FLAGS:---------
    this.acrosticsTables.isInformation = false;
    this.acrosticsTables.isInformationComplete = false;
    this.acrosticsTables.isInformationIncomplete = false;

    this.acrosticsTables.isAcrostics = false;
    this.acrosticsTables.isAcrosticsComplete = false;
    this.acrosticsTables.isAcrosticsIncomplete = false;

    this.acrosticsTables.isMnemonics = false;
    this.acrosticsTables.isMnemonicsComplete = false;
    this.acrosticsTables.isMnemonicsIncomplete = false;

    this.acrosticsTables.isImages = false;
    this.acrosticsTables.isImagesComplete = false;
    this.acrosticsTables.isImagesIncomplete = false;

    this.acrosticsTables.isPeglist = false;
    this.acrosticsTables.isPeglistComplete = false;
    this.acrosticsTables.isPeglistIncomplete = false;
    //--------------------

    this.acrosticsTables.tables=[
      {text:"table1"},
      {text:"table2"},
      {text:"table3"},
    ];
    this.acrosticsTables.counts=[
      {text:"count1"},
      {text:"count2"},
      {text:"count3"},
    ];
    this.acrosticsTables.color = "secondary";
  }

  getAcrosticsTable(){
    console.log("getAcrosticsTable called.");
  }

}
