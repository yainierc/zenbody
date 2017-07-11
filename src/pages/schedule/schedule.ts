import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleProvider } from '../../providers/schedule/schedule';

/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  days: any;

  constructor(public navCtrl: NavController, public scheduleSvc: ScheduleProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.scheduleSvc.getSchedules().then((data) => {
      this.days =data;    
    })
  }

  goToTimes(day, time){   
    this.navCtrl.push('SelectServicesPage',{
      scheduleId: day._id,
      timeId: time._id,
      date: day.date
    });
  }

}
