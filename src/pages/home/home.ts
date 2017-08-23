import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrammarPage } from '../grammar/grammar';
import { SpeakingPage } from '../speaking/speaking';
import { VocabularyPage } from '../vocabulary/vocabulary';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  viewSpeakingPage() {
    this.navCtrl.push(SpeakingPage)
  }
  viewVocabularyPage() {
    this.navCtrl.push(VocabularyPage)
  }  
  viewGrammarPage() {
    this.navCtrl.push(GrammarPage)
  }  
}
