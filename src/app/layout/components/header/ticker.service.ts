import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable'; // <--- This changes from the first Example!

@Injectable()
export class TickerService {

  result: any;

  constructor(private _http: HttpClient) {

  }

  getNewValue() {
    return IntervalObservable
      .create(1000)
      .map((i) => this._http.get('http://localhost:8080/prices?limit=1')
      );
  }

  getUsers() {
    return this._http.get('http://localhost:8080/prices?pair=ETHUSD&limit=1')
    // return Array.from({length: 40}, () => Math.floor(Math.random() * 40));
      .map(res => this.result = res);
  }

}

