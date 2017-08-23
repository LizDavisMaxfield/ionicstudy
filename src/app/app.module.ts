import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GrammarPage } from '../pages/grammar/grammar';
import { SpeakingPage } from '../pages/speaking/speaking';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    GrammarPage,
    SpeakingPage,
    VocabularyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GrammarPage,
    SpeakingPage,
    VocabularyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
