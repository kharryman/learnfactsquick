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
/*
import { SQLite, SQLiteDatabaseConfig, SQLiteObject } from '@ionic-native/sqlite';

class SQLiteMock {
  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {

    return new Promise((resolve,reject)=>{
      resolve(new SQLiteObject(new Object()));
    });
  }
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
