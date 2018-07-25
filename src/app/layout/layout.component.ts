import {Component, OnInit} from '@angular/core';
import {TickerService} from "../../services/data/ticker.service"

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

tickerbar :any[];
    constructor(private tickerService: TickerService) {

this.tickerbar = this.tickerService.tickerbar

    }

    ngOnInit() {
    }
}
