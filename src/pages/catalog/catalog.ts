import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  products = [
    { name: 'Fruti', thumbnail: 'assets/imgs/frooti.jpg', price: 30 },
    { name: 'Mineral Water', thumbnail: 'assets/imgs/bottle.jpg', price: 30 },
    { name: 'Potato Chips', thumbnail: 'assets/imgs/chips.jpeg', price: 30 },
    { name: 'Buiscuits', thumbnail: 'assets/imgs/biscuits.png', price: 30 }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogPage');
  }

  order(name) {
    const alert = this.alertCtrl.create({
      title: 'Thanks for purchasing!',
      subTitle: `You ordered a ${name}`,
      buttons: ['OK']
    });
    alert.present();
  }

}
