import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { TickerService } from "../../../services/data/ticker.service";
import { TwitterService } from "../../../services/data/twitter.service";
import { MetaService } from "../../../services/misc/meta.service";
import { PriceComponent } from './price/price.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { ClarityModule } from '@clr/angular';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { BidaskComponent } from './bidask/bidask.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
// import { TweetPipe } from './tweet/tweet.pipe';

@NgModule({
    imports: [CommonModule, NgxEchartsModule, ChartsRoutingModule, PageHeaderModule, FormsModule, ClarityModule, MomentModule],
    declarations: [ChartsComponent, PriceComponent, PieComponent, BarComponent, BidaskComponent, TweetComponent, TweetsComponent, WordcloudComponent], // , TweetPipe,
    providers: [TickerService, MetaService, TwitterService]
})
export class ChartsModule {}
