import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {LocalStorageService} from "angular-web-storage";

@Injectable()
export class TickerService {

    tickerbar: any[];


    result: any;

    constructor(public local: LocalStorageService, private _http: HttpClient) {
        this.getLS()
        if (this.tickerbar == null) {
            this.tickerbar = [["Bitcoin", "BTC"], ["Ethereum", "ETH"], ["IOTA", "IOTA"], ["Ripple", "XRP"], ["Litecoin", "LTC"], ["Bitcoin Cash", "BCH"]];

            this.setLS(0, this.tickerbar)
        }
        else {
            console.log(this.tickerbar)
        }


    }

    /*/// data related to the changing tickerbar



            changeTickerbar(action, curr) {
            if (action == 'add') {
                this.tickerbar.push(["hund", "HND"])
                this.tickerbar_observable.next(this.tickerbar);

            }
            if (action == 'remove') {

                this.tickerbar = this.tickerbar.filter(item => item[1] !== curr)
                this.tickerbar_observable.next(this.tickerbar);
            console.log(this.tickerbar)}
            if (action == 'init') {
                console.log('lets init')

                this.tickerbar_observable.next(this.tickerbar); }
        }*/

/// PRICE DATA
    getCurrentPrice() {
        return IntervalObservable
            .create(5000)
            .map((i) => this._http.get('http://localhost:8080/prices?limit=1')
            );
    }

    getPrices(pair) {
        return this._http.get('http://localhost:8080/prices?pair=' + pair + '&limit=6000')

        //.map(res => this.result = res);
    }

    to_timeseries(data, pair) {
        var len = data.length;
        var time_series = [];
        for (var i = len - 1; i >= 0; i--) {

            time_series.push([Date.parse(data[i]['time']), Number(data[i][pair])]);

        }

        return time_series
    }

    /// EXCHANGE DATA
    getOrderbook(pair, exchange) {

        return this._http.get('http://localhost:8080/orderbook?exchange=' + exchange + '&pair=' + pair)
    }

    getCurrExchangeVolumes(name_on_cmc) {
        return this._http.get('http://localhost:8080/cmc?type=currs&curr=' + name_on_cmc)
    }

/// EXCHANGE VOLUMES DATA
    getExchangeVolumes() {
        return this._http.get('http://localhost:8080/exchanges?limit=1')
    }

    formatExchangeVolumes(data) {
        var exc_data = [];

        for (var i in data) {

            if (i != 'time' && data[i] != null) {
                exc_data.push({'value': data[i] / 10000, 'name': i});
            }

        }

        return exc_data
    }


/// GITHUB ACTIVITY DATA

    getGithubLinks(github_name) {
        return this._http.get('https://api.github.com/orgs' + github_name + '/repos');
    }


    getGithubCommits(github_name) {
        //var urls = this._http.get('https://api.github.com/orgs'+ github_name +'/repos');


        return this._http.get('http://localhost:8080/github?curr=' + github_name)
        //return this._http.get(github_name + '/stats/commit_activity')


        //.map(res => this.result = res);
    }

    formatGithub(data) {
        var len = data.length;
        var plot_data = [];

        for (var i = 0; i <= len - 1; i++) {

            //for (var j = 0; j <= 6; j++) {
            var date = new Date(data[i]['week'] * 1000);
            plot_data.push([date.getDate() + '/' + date.getMonth(), (data[i]['total'])]);

            //}
        }
        console.log(plot_data)
        return plot_data
    }

/// REDDIT WORDCLOUD DATA

    getWordCloud(subreddit) {

        return this._http.get('http://localhost:8080/wordcloud?subreddit=' + subreddit)


    }

    formatWordCloud(object_) {
        var wordcloud_array = []
        Object.keys(object_).forEach(function (key) {
            var obj = {};
            obj['name'] = key
            obj['value'] = object_[key];
            wordcloud_array.push(obj); //push newly created object in `op`array
        });


        return wordcloud_array
    }

    KEY = 'tickerbau';

    //value: any = null;

    setLS(expired: number = 50, value) {
        this.local.set(this.KEY, value, expired, 's');
    }

    remove() {
        this.local.remove(this.KEY);
    }

    getLS() {
        this.tickerbar = this.local.get(this.KEY);
    }

    clear() {
        this.local.clear();
    }

}






