import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IotProvider {

  url = 'https://pushio-api.azurewebsites.net/getState/anah?key=00b24a13b6b07c48dc22fbb8781bb71c';

  constructor(public http: HttpClient) {
    console.log('Hello IotProvider Provider');
  }

  get stats() {
    return this.http.get(this.url);
  }

}
