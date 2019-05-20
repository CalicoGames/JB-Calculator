import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Calculation } from './calculation';
@Injectable({
  providedIn: 'root'
})
export class CalcService {
    url:string = "api/Calc"

    constructor(private http: HttpClient) { }

    getLast(): Observable<Calculation> {
        return this.http.get<Calculation>(this.url);
    }

    getCalc(calc: Calculation): Observable<Calculation> {
        return this.http.post<Calculation>(this.url, calc);
    }


}
