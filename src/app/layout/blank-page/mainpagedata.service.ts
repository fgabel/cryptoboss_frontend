import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MainpagedataService {

     constructor(private http: HttpClient) {}




    public getJSON() {
        return this.http.get("./assets/data/mainpagedata.json")
    }

}
