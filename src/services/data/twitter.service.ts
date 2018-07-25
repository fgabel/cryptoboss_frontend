import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Injectable()
export class TwitterService {

  constructor(private _http: HttpClient) { }
/// TWEETS
    getTweets(currency) {
return this._http.get('http://localhost:8080/twitter?currency='+ currency);
    }
}
