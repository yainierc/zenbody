import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PricelistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pricelist',
  templateUrl: 'pricelist.html',
})
export class PricelistPage {
  services: any;

  constructor(public navCtrl: NavController, public serviceSvc: ServicesProvider, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.serviceSvc.getServices().then((data) => {
      this.services = data;
    });
  }

    showAlert(item) {
    let alert = this.alertCtrl.create({
      title: item.name + '  $' + item.price,
      subTitle: item.description,
      buttons: ['OK']
    });
    alert.present();
  }

}
