import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class DataserviceService {

    constructor(private http: HttpClient) {
    }

    // API: GET /todos
    public getAllData() {
        return this.http
            .get(API_URL + '/exchanges')
            .map(response => {
                const data = response;
                return data
            })

            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

    getRanks() {
        return this.http.get('http://localhost:8080/cmc?type=ranks')
    }

    public getJSON(url): Observable<any>  {
        return this.http.get(url)
            .map(response => {
            const data = response;
            return data
        })
    }
}
