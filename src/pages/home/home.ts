import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IotProvider } from '../../providers/iot/iot';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  rating = [0, 0, 0];
  data = {
    purchasedQty: 2,
    wastedQty: 1
  };

  constructor(public navCtrl: NavController, public iot: IotProvider) {

  }

  ngOnInit() {

    setInterval(() => {
      this.iot.stats.subscribe((stats: any) => {
        console.log('Loading data', stats);
        let purchasedQty = stats.purchasedQty || 2;
        let wastedQty = stats.wastedQty || 1;
        // let purchasedQty = Math.floor(Math.random() * 10);
        // let wastedQty = Math.floor(Math.random() * purchasedQty)
        this.data = {
          purchasedQty,
          wastedQty
        };
      });
    }, 1000);
  }

}
