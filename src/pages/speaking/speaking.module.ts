import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakingPage } from './speaking';

@NgModule({
  declarations: [
    SpeakingPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakingPage),
  ],
})
export class SpeakingPageModule {}
