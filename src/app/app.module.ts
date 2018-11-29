declare var SQL;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverComponent } from './popover/popover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

//import { SQLite, SQLiteDatabaseConfig } from '@ionic-native/sqlite';

/*
class SQLiteMock {
  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {

    return new Promise((resolve,reject)=>{
      resolve(new SQLiteObject(new Object()));
    });
  }
}

class SQLiteObject{
    _objectInstance: any;

    constructor(_objectInstance: any){
        this._objectInstance = _objectInstance;
    };

    executeSql(statement: string, params: any): Promise<any>{

        return new Promise((resolve,reject)=>{
            try {
                var st = this._objectInstance.prepare(statement,params);
                var rows :Array<any> = [] ;
                while(st.step()) {
                    var row = st.getAsObject();
                    rows.push(row)
                }
                var payload = {
                    rows: {
                    item: function(i) {
                        return rows[i];
                    },
                    length: rows.length
                    },
                    rowsAffected: this._objectInstance.getRowsModified() || 0,
                    insertId: this._objectInstance.insertId || void 0
                };
                resolve(payload);
            } catch(e){
                reject(e);
            }
        });
    };

}
*/


@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    //{provide: SQLite, useClass: SQLiteMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
