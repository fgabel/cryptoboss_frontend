import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {TickerService} from "../../../services/data/ticker.service";
import {TwitterService} from "../../../services/data/twitter.service";
import {NgxEchartsService} from 'ngx-echarts';
import {ActivatedRoute} from '@angular/router';
import { Tweet } from '../../../services/data/tweet';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    //animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    // bar chart
    chartOption: any;
    tickerdata = {};
tweets = {};

    echartsInstance: any;
    echartsInstance2: any;
    echartsInstance3: any;
    echartsInstance4: any;
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'time',
                boundaryGap: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                max: 8000,
                min: 7000
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

    id: string;
    private sub: any;

    constructor(private tickerService: TickerService, private twitterService: TwitterService, private route: ActivatedRoute) {


    }

    isDataAvailable: boolean = false;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            console.log(this.id)
        });

this.twitterService.getTweets('TEST').subscribe((res)=>{
this.tweets=res
    console.log(this.tweets)
}
)

    }

    onChartInit1(e: any) {
        this.echartsInstance = e;
        console.log('on chart init:', e);

        this.tickerService.getPrices('BTCUSD')
            .subscribe((res) => {
                    console.log(this.tickerService.to_timeseries(res, 'BTCUSD'))
                    this.tickerdata = this.tickerService.to_timeseries(res, 'BTCUSD');

                    this.isDataAvailable = true;


                    this.echartsInstance.setOption({
                        xAxis: [
                            {
                                type: 'time',
                                boundaryGap: false,
                                axisLabel: {
                                    formatter: function (value, index) {
                                        // helper functions
                                        function addZero(i) {
                                            if (i < 10) {
                                                i = "0" + i;
                                            }
                                            return i;
                                        }

                                        const monthNames = ["January", "February", "March", "April", "May", "June",
                                            "July", "August", "September", "October", "November", "December"
                                        ];
                                        // Formatted to be month/day; display year only in the first label
                                        var date = new Date(value);
                                        if (index === 0) {
                                            return 'haha'
                                        }
                                        return monthNames[date.getMonth()] + '. ' + date.getDate() + '\n' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
                                    }
                                }

                            }
                        ],

                        legend: {
                            data: ['BTC']
                        },


                        series: [
                            {
                                name: 'BTC',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {normal: {}},
                                data: this.tickerdata,
                                symbolSize: 0
                            }
                        ]
                    })
                }
            );

    }

    onChartInit2(e: any) {
        this.echartsInstance2 = e;
        console.log('on chart init:', e);
        this.tickerService.getPrices('ETHUSD')
            .subscribe((res) => {
                    this.tickerdata = this.tickerService.to_timeseries(res, 'ETHUSD');

                    this.isDataAvailable = true;


                    this.echartsInstance2.setOption({
                        xAxis: [
                            {
                                type: 'time',
                                boundaryGap: ['20%', '20%'],
                                axisLabel: {
                                    formatter: function (value, index) {
                                        // helper functions
                                        function addZero(i) {
                                            if (i < 10) {
                                                i = "0" + i;
                                            }
                                            return i;
                                        }

                                        const monthNames = ["January", "February", "March", "April", "May", "June",
                                            "July", "August", "September", "October", "November", "December"
                                        ];
                                        // Formatted to be month/day; display year only in the first label
                                        var date = new Date(value);

                                        return monthNames[date.getMonth()] + '. ' + date.getDate() + '\n' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
                                    }
                                }
                            }
                        ],

                        legend: {
                            data: ['BTC']
                        },
                        yAxis: [
                            {
                                type: 'value',
                                max: 700,
                                min: 500
                            }
                        ],

                        series: [
                            {
                                name: 'BTC',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {normal: {}},
                                data: this.tickerdata,
                                symbolSize: 0

                            },

                        ]
                    })
                }
            );

    }




    onChartInit4(e: any) {
        this.echartsInstance4 = e;
        console.log('on chart init:', e);


        this.tickerService.getExchangeVolumes()
            .subscribe((res) => {
                    this.tickerdata = this.tickerService.formatExchangeVolumes(res);
                    console.log(this.tickerdata);
                    this.echartsInstance4.setOption({
                        title: {
                            text: 'rtg',
                            subtext: 'erw',
                            x: 'center'
                        },


                        series: [
                            {
                                name: '姓名',
                                type: 'pie',
                                radius: '55%',
                                center: ['40%', '50%'],
                                data: this.tickerdata,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    })
                }
            );

    }

    getWidth() {
        if (this.echartsInstance) {
            this.echartsInstance.setOption({

                xAxis: [
                    {
                        type: 'time',
                        boundaryGap: false
                    }
                ],
                legend: {
                    data: ['BTC', 'ETH']
                },
                // .... some configuration
                series: [
                    {
                        name: 'BTC',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data: this.tickerdata
                    },
                    {
                        name: 'ETH',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data: this.tickerdata
                    }
                ]
            })
            console.log('getWidth():', this.echartsInstance.getWidth());
        }
    }

    getHeight() {
        if (this.echartsInstance) {
            console.log('getHeight():', this.echartsInstance.getHeight());
        }
    }

    getDom() {
        if (this.echartsInstance) {
            console.log('getDom():', this.echartsInstance.getDom());
        }
    }

    getOption() {
        if (this.echartsInstance) {
            console.log('getOption():', this.echartsInstance.getOption());
        }
    }

    clear() {
        if (this.echartsInstance) {
            this.echartsInstance.clear();
            console.log('clear() called');
        }
    }
}
