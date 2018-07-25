import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    //animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    constructor() {}
    price = '12345'
    ngOnInit() {}
}
