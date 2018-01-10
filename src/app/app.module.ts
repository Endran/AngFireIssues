import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from 'angularFire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ExampleComponent } from './example/example.component';

export const firebaseCredentials = {
  apiKey: 'AIzaSyBJ13iD-f2jHlu47iVTpGBm-Hr6YXyh4mw',
  authDomain: 'bittipper-edd0a.firebaseapp.com',
  databaseURL: 'https://bittipper-edd0a.firebaseio.com',
  projectId: 'bittipper-edd0a',
  storageBucket: 'bittipper-edd0a.appspot.com',
  messagingSenderId: '992375349823'
};

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
