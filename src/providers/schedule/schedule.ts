import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScheduleProvider {

  data: any;

  constructor(public http: Http) {
   this.data = null;
  }

  getSchedules(){

    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }

    return new Promise(resolve => {

      //this.http.get('http://107.180.65.249:3000/api/schedules')
      this.http.get('http://localhost:3000/api/schedules')      
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  getTimeByScheduleAndTimeId(scheuleId, timeId){

    return new Promise(resolve => {      
      this.http.get('http://localhost:3000/api/time/' + scheuleId +'/'+timeId)      
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

}
