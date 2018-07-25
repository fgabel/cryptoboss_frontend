import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {TickerService} from "../../../../services/data/ticker.service";
import {NgxEchartsService} from 'ngx-echarts';

@Component({
    selector: 'app-bidask',
    templateUrl: './bidask.component.html',
    styleUrls: ['./bidask.component.scss']
})
export class BidaskComponent implements OnInit {

    echartsInstance12: any;
    tickerdata = {};
    isLoading: boolean = false;
@Input() curr: string;

    options = {
        title: {
            text: 'Price'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: null
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'value',
                scale: 'True'

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    showMinLabel: false,
                    showMaxLabel: false,
                }
            }
        ],
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 25,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 25,
                end: 100
            },

        ]
    }

    constructor(private tickerService: TickerService, private es: NgxEchartsService) {
    }

    ngOnInit() {
    }
ngOnChanges() {
        this.onChartUpdate3(this.echartsInstance12)
}
onUpdateClick() {
this.onChartUpdate3(this.echartsInstance12)
}
    onChartInit3(e: any) {
        this.isLoading = true;
        const echarts = this.es.echarts;
        this.echartsInstance12 = e;
        console.log('on chart init:', e);
        /*
                                this.tickerService.getGithubLinks('/ethereumproject').subscribe(res => {
                                    res = res.map(j => (j.url)).map(i =>(this.tickerService.getGithubCommits(i).subscribe(res_ => {
                                        this.arr.push(res_.map(k => (k.total)))

                                    }

                                    )
                                    ))


                    })*/


        this.tickerService.getOrderbook(this.curr +'/USD', 'kraken')
            .subscribe((res) => {
                    console.log(res["bids"])
                    this.isLoading = false;

                    this.echartsInstance12.setOption({
                        title: {
                            text: 'Bid-Ask Spread',
                            subtext: this.curr +'/USD'
                        },

                        legend: {
                            data: ['BID', 'ASK']
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'value',

                                min: 'dataMin',
                                max: 'dataMax'

                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#dc143c'
                                    }
                                },


                                min: 'dataMin',
                                max: 'dataMax'

                            }
                        ],
                        series: [
                            {
                                name: 'ask amount',
                                type: 'line',
                                data: res["asks"],
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(255, 60, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(255, 5, 131)'
                                        }])
                                    }
                                },
                            },
                            {
                                name: 'bid amount',
                                type: 'line',
                                data: res["bids"],
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(58, 255, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(58, 255, 131)'
                                        }])
                                    }
                                },
                            }
                        ]
                    });

                }
            );

    }

    onChartUpdate3(e: any) {
        this.isLoading = true;
        const echarts = this.es.echarts;
        this.echartsInstance12 = e;
        console.log('on chart init:', e);
        /*
                                this.tickerService.getGithubLinks('/ethereumproject').subscribe(res => {
                                    res = res.map(j => (j.url)).map(i =>(this.tickerService.getGithubCommits(i).subscribe(res_ => {
                                        this.arr.push(res_.map(k => (k.total)))

                                    }

                                    )
                                    ))


                    })*/


        this.tickerService.getOrderbook(this.curr +'/USD', 'kraken')
            .subscribe((res) => {
                    console.log(res["bids"])

this.isLoading = false;
                    this.echartsInstance12.setOption({
                        title: {
                            text: 'Bid-Ask Curve of ' + this.curr +'/USD',
                            subtext: 'exchange: KRAKEN'
                        },

                        legend: {
                            data: ['BID', 'ASK']
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'value',

                                min: 'dataMin',
                                max: 'dataMax'

                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#dc143c'
                                    }
                                },


                                min: 'dataMin',
                                max: 'dataMax'

                            }
                        ],
                        series: [
                            {
                                name: 'ask amount',
                                type: 'line',
                                data: res["asks"],
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(255, 60, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(255, 5, 131)'
                                        }])
                                    }
                                },
                            },
                            {
                                name: 'bid amount',
                                type: 'line',
                                data: res["bids"],
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(58, 255, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(58, 255, 131)'
                                        }])
                                    }
                                },
                            }
                        ]
                    });

                }
            );

    }
}
