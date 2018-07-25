import {Injectable, Output, EventEmitter} from '@angular/core';
import {LocalStorageService} from "angular-web-storage";
import {TickerService} from "../data/ticker.service";
import {NgxEchartsService} from "ngx-echarts";
import {MetaService} from "./meta.service";

@Injectable()
export class AddService {
    tickerbar = [["Bitcoin", "BTC"], ["Ethereum", "ETH"], ["IOTA", "IOTA"], ["Ripple", "XRP"], ["Litecoin", "LTC"], ["Bitcoin Cash", "BCH"]];
    KEY = 'tickerbar_localstorage';
    @Output() change: EventEmitter<any[]> = new EventEmitter();

    constructor(public local: LocalStorageService) {
    }

    remove(curr) {


this.tickerbar = this.tickerbar.filter(item => item[1] !== curr)

            this.change.emit(this.tickerbar);
            //this.local.set(this.KEY, this.tickerbar);


    }

        toggle(arr) {
        // if (this.local.get(this.KEY)) {
        //     this.tickerbar = this.local.get(this.KEY);
        // }
        // else {
        //     this.local.set(this.KEY, this.tickerbar);
        // }

        var currs = this.tickerbar.map(curr_array => curr_array[1])
        //arr is an array of [first part of ['header'] of metaservice, curr of Input]
        if (currs.includes(arr[1])) {
            this.local.set(this.KEY, this.tickerbar);
        }
        else {
            console.log(currs.includes(arr[1]))
            console.log(arr[1])
            console.log(currs)
            this.tickerbar.push(arr);
            this.change.emit(this.tickerbar);
            this.local.set(this.KEY, this.tickerbar);
        }

    }

}


// if (this.subbed) {
//     this.tickerService.changeTickerbar('add', this.curr)
//     // console.log('adding hund')
//     // var tickerbar = this.local.get(this.KEY)
//     // tickerbar.push(["hund", "HND"])
//     // console.log(this.local.get(this.KEY))
//     // this.local.set(this.KEY, tickerbar);
// }
// else {
//     this.tickerService.changeTickerbar('remove', this.curr)
//     // console.log('removing')
//     // console.log(this.curr)
//     // var tickerbar = this.local.get(this.KEY)
//     // this.local.set(this.KEY, tickerbar.filter(item => item[1] !== this.curr), 0, 's');
//
// }
