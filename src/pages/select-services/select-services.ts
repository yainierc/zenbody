import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { ScheduleProvider } from '../../providers/schedule/schedule';

/**
 * Generated class for the SelectServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-services',
  templateUrl: 'select-services.html',
})
export class SelectServicesPage {
  public scheduleId;
  public timeId;
  public date;
  public hour: string;
  selectedSchedule;
  services: any;
  complementaryAvailable = false;

  constructor(public navCtrl: NavController, public serviceSvc: ServicesProvider, public scheduleSvc: ScheduleProvider, public navParams: NavParams) {
    this.scheduleId = navParams.get("scheduleId");
    this.timeId = navParams.get("timeId");
    this.date = navParams.get("date");
  }

  ionViewDidLoad() {
    console.log('ScheduleId: ' + this.scheduleId);
    console.log('TimeId: ' + this.timeId);
    this.scheduleSvc.getTimeByScheduleAndTimeId(this.scheduleId, this.timeId).then((data) => {
      if (data) {
        this.selectedSchedule = (data as any).times[0];
      }

      if (this.selectedSchedule != null) {
        this.hour = this.selectedSchedule.hour;
        this.serviceSvc.getServices().then((data) => {
          this.services = data;
        });
      }
    });
  }

  selectService(item) {
    if (this.selectedSchedule && this.selectedSchedule.appointment.services) {
      var serviceFound = this.selectedSchedule.appointment.services.find(x => x == item);
      if (serviceFound != null) {
        delete this.selectedSchedule.appointment.services[item];
      }
      else {
        this.selectedSchedule.appointment.services.push(item);
      }
      this.recalculateServices();
    }
    console.log('ionViewDidLoad SelectServicesPage');
    console.log('schedule:' + this.selectedSchedule);

  }

  recalculateServices() {
    var duration = 0;
    var price = 0;
    this.complementaryAvailable = this.selectedSchedule.appointment.services.length > 0;
    this.selectedSchedule.appointment.services.forEach(element => {
      duration = duration + element.duration;
      price = price + element.price;
    });
    this.selectedSchedule.appointment.duration = duration;
    this.selectedSchedule.appointment.price = price;   
  }
}
