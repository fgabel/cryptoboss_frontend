import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {TickerService} from "../../../../services/data/ticker.service";
import {MetaService} from "../../../../services/misc/meta.service";
import {AddService} from "../../../../services/misc/add.service";
import {NgxEchartsService} from 'ngx-echarts';
import {LocalStorageService} from "angular-web-storage";

@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
    @Input() curr: string;
    echartsInstance: any;
    tickerdata = {};
    header: string;
    teaser: string;
    img: string;
    subbed: boolean = false;
    KEY = 'tickerbau';
    tabledata = 0;
    pre = 0;
    color_of_change: boolean;
    isLoading: boolean = true;

    onClick() {
        this.addService.toggle([this.metaService.getMetaDataForBarometer(this.curr)['header'].split(" (")[0], this.curr])


    }

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

    constructor(public local: LocalStorageService, private tickerService: TickerService, private metaService: MetaService, private es: NgxEchartsService, private addService: AddService) {
    }


    ngOnInit() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.header = metadata['header']
        this.teaser = metadata['teaser']
        this.img = metadata['img']
        this.tickerService.getCurrentPrice()
            .subscribe((res) => res.subscribe((res_) => {
                this.pre = this.tabledata // one period before
                this.tabledata = res_[0][this.curr + 'USD'] // current period
                if (this.pre == this.tabledata) {
                }
                else {
                    this.color_of_change = (this.pre <= this.tabledata)
                }

            }));

    }

    ngOnChanges() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.header = metadata['header']
        this.teaser = metadata['teaser']
        this.img = metadata['img']
        this.onChartUpdate1(this.echartsInstance)

    }


    onChartInit1(e: any) {
        this.isLoading = true;
        const echarts = this.es.echarts;
        this.echartsInstance = e;
        console.log('on chart init:', e);

        this.tickerService.getPrices(this.curr + 'USD')
            .subscribe((res) => {
                    console.log(this.tickerService.to_timeseries(res, this.curr + 'USD'))
                    this.tickerdata = this.tickerService.to_timeseries(res, this.curr + 'USD');
                    this.isLoading = false;

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

                                        return monthNames[date.getMonth()] + '. ' + date.getDate() + '\n' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
                                    }
                                }

                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',

                                min: 'dataMin',
                                max: 'dataMax',
                                axisLabel: {
                                    showMinLabel: false,
                                    showMaxLabel: false,
                                }
                            }
                        ],

                        legend: {
                            data: [this.curr]
                        },


                        series: [
                            {
                                name: this.curr,
                                type: 'line',
                                stack: '总量',
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(0, 255, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(0, 35, 131)'
                                        }])
                                    }
                                },
                                data: this.tickerdata,
                                symbolSize: 0
                            }
                        ]
                    })
                }
            );

    }

    onChartUpdate1(e: any) {
        this.isLoading = true;
        const echarts = this.es.echarts;
        this.echartsInstance = e;
        console.log('on chart init:', e);

        this.tickerService.getPrices(this.curr + 'USD')
            .subscribe((res) => {
                    //console.log(this.tickerService.to_timeseries(res, this.curr + 'USD'))
                    this.tickerdata = this.tickerService.to_timeseries(res, this.curr + 'USD');

                    this.isLoading = false;
                    this.echartsInstance.setOption({

                        yAxis: [
                            {
                                type: 'value',

                                min: 'dataMin',
                                max: 'dataMax',
                                axisLabel: {
                                    showMinLabel: false,
                                    showMaxLabel: false,
                                }
                            }
                        ],

                        legend: {
                            data: [this.curr]
                        },


                        series: [
                            {
                                name: this.curr,
                                smooth: true,
                                sampling: 'average',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(0, 255, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(0, 35, 131)'
                                        }])
                                    }
                                },
                                data: this.tickerdata,
                                symbolSize: 0
                            }
                        ]
                    })
                }
            );

    }
}
