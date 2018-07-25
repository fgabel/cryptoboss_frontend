import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

​import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { MainpagedataService } from './mainpagedata.service';
@NgModule({
    imports: [NgxDatatableModule, CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent],
  providers: [DataserviceService, MainpagedataService]
})
export class BlankPageModule {}
