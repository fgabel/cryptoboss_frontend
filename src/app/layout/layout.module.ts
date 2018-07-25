import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';


//import { TickerService } from './components/header/ticker.service';
import {TickerService} from "../../services/data/ticker.service";
import {AddService} from "../../services/misc/add.service";
import {MetaService} from "../../services/misc/meta.service";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        HttpClientModule,
FormsModule,
        NgbModule,
        AngularWebStorageModule,
        NgxDnDModule
    ],
    providers: [TickerService, AddService, MetaService],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
