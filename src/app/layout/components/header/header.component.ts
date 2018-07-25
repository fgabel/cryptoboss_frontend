import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
//import {TickerService} from './ticker.service';
import {TickerService} from "../../../../services/data/ticker.service";
import {LocalStorageService, SessionStorageService, LocalStorage, SessionStorage} from 'angular-web-storage';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() tickerbar: any[];


    pushRightClass: string = 'push-right';
    tickerdata = {ETHUSD: 0.00};

    constructor(private translate: TranslateService, public router: Router, private tickerService: TickerService) {



        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

//tickerbar = [["Bitcoin", "BTC"], ["Ethereum", "ETH"], ["IOTA", "IOTA"], ["Ripple", "XRP"], ["Litecoin", "LTC"], ["Bitcoin Cash", "BCH"]];
    ngOnInit() {

        this.tickerService.getCurrentPrice()
            .subscribe((res) => res.subscribe((res_) => this.tickerdata = res_[0]));
    }


    ngOnChanges() {
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');

    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
this.tickerbar.push(["huren", "sohn"])
    }



}
