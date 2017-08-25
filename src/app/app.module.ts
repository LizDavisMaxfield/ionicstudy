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
import { AssessmentPage } from '../pages/assessment/assessment'
import { RoundProgressModule } from "angular-svg-round-progressbar/dist";

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    GrammarPage,
    SpeakingPage,
    VocabularyPage,
    AssessmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GrammarPage,
    SpeakingPage,
    VocabularyPage,
    AssessmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
