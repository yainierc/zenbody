import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  goToSchedulePage() {
    this.navCtrl.push('SchedulePage');
  }

  constructor(public navCtrl: NavController) {

  }

}
