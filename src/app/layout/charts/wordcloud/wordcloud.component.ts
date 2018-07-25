import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TickerService} from "../../../../services/data/ticker.service";
import {HttpClient} from '@angular/common/http';
import {MetaService} from "../../../../services/misc/meta.service";
import {NgxEchartsService} from 'ngx-echarts';
import * as echarts from '../../../../../node_modules/echarts-wordcloud/dist/echarts-wordcloud.js';

declare const require: any;


function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

@Component({
    selector: 'app-wordcloud',
    templateUrl: './wordcloud.component.html',
    styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit {
    echartsInstance3: any;
    tickerdata = {};
    reddit: string;
    echarts = require('echarts');
    chart = document.getElementById('chart');

//chart = this.echarts.init(document.getElementsByClassName('chart'));

    @Input() curr: string;

    options = {
        title: {
            text: 'Google Trends',
            link: 'http://www.google.com/trends/hottrends'
        },
        tooltip: {
            show: true
        },
        series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: [
                {
                    name: "Sam S Club",
                    value: 10000,
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    }
                },
                {
                    name: "Macys",
                    value: 6181,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Amy Schumer",
                    value: 4386,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Jurassic World",
                    value: 4055,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Charter Communications",
                    value: 2467,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Chick Fil A",
                    value: 2244,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Planet Fitness",
                    value: 1898,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Pitch Perfect",
                    value: 1484,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Express",
                    value: 1112,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Home",
                    value: 965,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Johnny Depp",
                    value: 847,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Lena Dunham",
                    value: 582,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Lewis Hamilton",
                    value: 555,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "KXAN",
                    value: 550,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Mary Ellen Mark",
                    value: 462,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Farrah Abraham",
                    value: 366,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Rita Ora",
                    value: 360,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Serena Williams",
                    value: 282,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "NCAA baseball tournament",
                    value: 273,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Point Break",
                    value: 265,
                    itemStyle: createRandomItemStyle()
                }
            ]
        }]
    };

    constructor(private tickerService: TickerService, private metaService: MetaService, private es: NgxEchartsService) {
    }

    ngOnInit() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.reddit = metadata["reddit"]
        require('echarts-wordcloud');
// console.log(this.chart)

    }

    ngOnChanges() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.reddit = metadata["reddit"]


        this.onChartUpdate3(this.echartsInstance3)

    }

    onChartInit3(e: any) {

        this.tickerService.getWordCloud(this.reddit)
            .subscribe((res) => {
                    console.log(this.tickerService.formatWordCloud(res))

                    this.tickerdata = this.tickerService.formatWordCloud(res);
                    var chart = this.echarts.init(document.getElementsByClassName('chart')[0]);
                    console.log(chart)
                    chart.setOption({
                        title: {
                            text: 'Google Trends',
                            link: 'http://www.google.com/trends/hottrends'
                        },
                        tooltip: {
                            show: true
                        },
                        series: [{
                            name: 'Google Trends',
                            type: 'wordCloud',
                            size: ['80%', '80%'],
                            textRotation: [0, 45, 90, -45],
                            textPadding: 0,
                            autoSize: {
                                enable: true,
                                minSize: 14
                            },
                            data: this.tickerdata

                        }]
                    });
                }
            );

    }

   onChartUpdate3(e: any) {

        this.tickerService.getWordCloud(this.reddit)
            .subscribe((res) => {
                    console.log(this.tickerService.formatWordCloud(res))

                    this.tickerdata = this.tickerService.formatWordCloud(res);
                    var chart = this.echarts.init(document.getElementsByClassName('chart')[0]);
                    console.log(chart)
                    chart.setOption({
                        title: {
                            text: 'Google Trends',
                            link: 'http://www.google.com/trends/hottrends'
                        },
                        tooltip: {
                            show: true
                        },
                        series: [{
                            name: 'Google Trends',
                            type: 'wordCloud',
                            size: ['80%', '80%'],
                            textRotation: [0, 45, 90, -45],
                            textPadding: 0,
                            autoSize: {
                                enable: true,
                                minSize: 14
                            },
                            data: this.tickerdata

                        }]
                    });
                }
            );

    }
}
