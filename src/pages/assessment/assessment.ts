import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//$IMPORTSTATEMENT

/**
 * Generated class for the Assessment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//$IONICPAGE
@IonicPage()

@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html',
})
export class AssessmentPage {
  assessmentType:string;
  currentQuestion: string;
  prompt: string;
  current: number;
  max: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessmentType = "Practice";
    this.currentQuestion = 'Can you define this word in your native language?'
    this.prompt = "adorar";
    this.current = 10;
    this.max = 10;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }
  back(){
    this.navCtrl.pop()
  }
}
