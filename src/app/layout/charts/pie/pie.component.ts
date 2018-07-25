import { Component, Input, OnInit } from '@angular/core';
import {TickerService} from "../../../../services/data/ticker.service";
import {NgxEchartsService} from "ngx-echarts";
import {MetaService} from "../../../../services/misc/meta.service";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
echartsInstance4: any;
tickerdata = {};
name_on_cmc: string;
@Input() curr: string;

    options2 = {
        backgroundColor: '#ffffff',

        title: {
            text: 'Traded on...',

        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        }
    };

  constructor(private tickerService: TickerService, private es: NgxEchartsService, private metaService: MetaService) { }

  ngOnInit() {
      var metadata = this.metaService.getMetaDataForBarometer(this.curr);
this.name_on_cmc = metadata["link_name_on_cmc"]
  }


      ngOnChanges() {
        var metadata = this.metaService.getMetaDataForBarometer(this.curr);
        this.name_on_cmc = metadata["link_name_on_cmc"]

        this.onChartUpdate4(this.echartsInstance4)

    }
    onChartInit4(e: any) {
        this.echartsInstance4 = e;
        console.log('on chart init:', e);


        this.tickerService.getCurrExchangeVolumes(this.name_on_cmc)
            .subscribe((res) => {
                 console.log(res);
                    this.tickerdata = this.tickerService.formatExchangeVolumes(res);
console.log(this.tickerdata);
                    this.echartsInstance4.setOption({
                        title: {
                            text: 'Traded on...',

                        },
                        backgroundColor: 'rgba(248, 248, 248, 1)',

                        series: [
                            {
                                name: '姓名',
                                type: 'pie',
                                radius: '90%',
                                data: this.tickerdata,
                                center: ['50%', '55%'],

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

    onChartUpdate4(e: any) {
              const echarts = this.es.echarts;
        this.echartsInstance4 = e;

                this.tickerService.getCurrExchangeVolumes(this.name_on_cmc)
            .subscribe((res) => {
                 console.log(res);
                    this.tickerdata = this.tickerService.formatExchangeVolumes(res);
console.log(this.tickerdata);
                    this.echartsInstance4.setOption({
                        title: {
                            text: 'Traded on...',

                        },


                        series: [
                            {
                                name: '姓名',
                                type: 'pie',
                                radius: '90%',
center: ['50%', '55%'],

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
}
