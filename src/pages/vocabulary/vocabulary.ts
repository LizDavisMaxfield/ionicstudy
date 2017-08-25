import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AssessmentPage } from '../assessment/assessment'

/**
 * Generated class for the VocabularyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  levels: Array<number> = [1,2,3,4,5];
  currentLevel: number = this.levels[0];
  assessmentsTaken: number = 9;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyPage');
    Chart.defaults.global.defaultFontColor = '#fd9727';
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["7/21", "7/28", "8/5", "8/8", "8/16", "8/22", "8/29"],
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                //backgroundColor: "#000000",
                borderColor: "#fd9727",
                borderCapStyle: 'butt',
                borderDash: [],
                borderWidth: 1,
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                //pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fd9727",
                //pointBorderWidth: 1,
                //pointHoverRadius: 5,
                //pointHoverBackgroundColor: "rgba(75,192,192,1)",
                //pointHoverBorderColor: "rgba(220,220,220,1)",
                //pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 10,
                data: [1,1,3,4,4,5,6],
                spanGaps: false,
            }
        ]
      }, 
      options: {
        legend: {
          display: false,
          labels: {
            padding: 20
          }
        },
        scales: {
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 7,
                  stepSize: 1
              }
          }]
      }
      }
    });
      
  }

  back(){
    this.navCtrl.pop()
  }

  viewAssessmentPage() {
    this.navCtrl.push(AssessmentPage);
  }
}
