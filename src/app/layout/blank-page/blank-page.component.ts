

import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {DataserviceService} from './dataservice.service';
import {MainpagedataService} from './mainpagedata.service';
import * as icondata from './icondata';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit{

    icons = '/assets/images';
rows = {};
    test = {};
    icondata = icondata;
isDataLoaded = false;
    constructor(private _dataService: DataserviceService, private _mainpagedataService: MainpagedataService) {



    }
ngOnInit() {




        this._dataService.getJSON("./assets/data/mainpagedata.json").subscribe(data =>{

console.log(data)}
        );


                this._dataService.getRanks().subscribe(res =>{
this.rows = res;
 this.isDataLoaded = true;
                    console.log(res)
                       //this.rows = res
                }
        );


}

    columns = [
        {
            prop: 'name', // prop will bind to the json property
            name: 'name' // You can define the name here
            // ( Column label. If none specified, it will use the prop value and decamelize it. )
        },
        {
            prop: 'price',
            name: 'price'
        },
        {
            prop: 'volume',
            name: 'volume'
        },
        {
            prop: 'social',
            name: 'social media activity'
        },
    ];

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `http://localhost:8080/cmc?type=ranks`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };
console.log(req)
        req.send();

    }

}


