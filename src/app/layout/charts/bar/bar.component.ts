import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TickerService} from "../../../../services/data/ticker.service";
import {HttpClient} from '@angular/common/http';
import {MetaService} from "../../../../services/misc/meta.service";
import {NgxEchartsService} from 'ngx-echarts';




@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})


export class BarComponent implements OnInit {
    echartsInstance3: any;
    tickerdata = {};
    github:string;
@Input() curr: string;

    options = {
        title: {
            text: 'Number of GitHub commits'
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
        xAxis: {
        type: 'time',
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
        yAxis: [
            {
                type: 'value',
                max: 300,
                min: 0,
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

    constructor(private tickerService: TickerService, private metaService: MetaService, private es: NgxEchartsService) {
    }

    ngOnInit() {
var metadata = this.metaService.getMetaDataForBarometer(this.curr);
this.github = metadata["github"]
    }
    ngOnChanges() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.github = metadata["github"]

        this.onChartUpdate3(this.echartsInstance3)

    }
arr = []
sum = []
    onChartInit3(e: any) {
        this.echartsInstance3 = e;
        console.log('on chart init:', e);
/*
                        this.tickerService.getGithubLinks('/ethereumproject').subscribe(res => {
                            res = res.map(j => (j.url)).map(i =>(this.tickerService.getGithubCommits(i).subscribe(res_ => {
                                this.arr.push(res_.map(k => (k.total)))

                            }

                            )
                            ))


            })*/


        this.tickerService.getGithubCommits(this.github)
            .subscribe((res) => {
                console.log(res)
                    this.tickerdata = res;

                    this.echartsInstance3.setOption({
                        title: {
                            text: 'Number of weekly GitHub commits'
                        },
                        xAxis: [
                            {
                                type: 'category',
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

                                        return monthNames[date.getMonth()] + ' ' + date.getDate();
                                    }
                                }
                            }
                        ],

                        legend: {
                            data: ['BTC']
                        },
                        yAxis: {
                            min: 0,
                            max: 500,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },

                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {color: 'rgba(255, 0, 0,0.6)'}
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: this.tickerdata,
                                animationDelay: function (idx) {
                                    return idx * 10;
                                }

                            },

                        ],
                        animationEasing: 'elasticOut',
                        animationDelayUpdate: function (idx) {
                            return idx * 5;
                        }
                    })
                }
            );

    }

        onChartUpdate3(e: any) {
        const echarts = this.es.echarts;
        this.echartsInstance3 = e;
        console.log('on chart init:', e);

        this.tickerService.getGithubCommits(this.github)
            .subscribe((res) => {
                console.log(res)



                    this.tickerdata = res;


                    this.echartsInstance3.setOption({


                        legend: {
                            data: [this.curr]
                        },
                        yAxis: {
                            min: 0,
                            max: 500,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },

                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {color: 'rgba(255, 0, 0,0.6)'}
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: this.tickerdata,
                                animationDelay: function (idx) {
                                    return idx * 10;
                                }

                            },

                        ],
                        animationEasing: 'elasticOut',
                        animationDelayUpdate: function (idx) {
                            return idx * 5;
                        }
                    })
                }
            );

    }
}
