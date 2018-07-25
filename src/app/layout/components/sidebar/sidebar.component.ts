import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import * as icondata from '../../blank-page/icondata';
import {TickerService} from "../../../../services/data/ticker.service";
import {AddService} from "../../../../services/misc/add.service";
import {metadata} from "../../../../services/misc/meta.service";

// var states = Object.keys(icondata.data)
// var terms = states.map(symbol => icondata["data"][symbol].name)

var states = Object.keys(metadata)

var terms = states.map(symbol => metadata[symbol].header)



@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    tickerdata = {ETHUSD: 0.00};
    removed: boolean = false;
    @Input() tickerbar: any[];
    public model: any;
    url:string;
    clicked:boolean = false;

string_without_brackets_(str) {
            var regExp = /\(([^)]+)\)/;

        return regExp.exec(str)[1].toLowerCase();

}

    onClick(description, symbol) {
        this.addService.toggle([description, symbol.toUpperCase()])

this.url = this.router.url
        console.log(this.url)
        this.clicked = true;
    }

    remover(ticker) {

        this.addService.remove(ticker)

    }

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : terms.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        );

    itemSelected($event) {
        // here, we need to extract the part of icondata.data.[...].name that is within the brackets
        var regExp = /\(([^)]+)\)/;
        var string_without_brackets = regExp.exec($event.item);
if (!this.clicked){
    this.url=  '/charts/' + string_without_brackets[1]
    this.router.navigate([this.url]);

}
this.clicked = false;
    }

    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    constructor(private translate: TranslateService, public router: Router, private tickerService: TickerService, private addService: AddService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

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

    ngOnInit() {
        //this.terms = this.metaService.getMetaDataForBarometer('all').map(dict => dict['header']);


        ///dynamically add and remove buttons
        this.addService.change.subscribe(res => {
            this.tickerbar = res;
        })

        this.tickerService.getCurrentPrice()
            .subscribe((res) => res.subscribe((res_) => this.tickerdata = res_[0]));
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
