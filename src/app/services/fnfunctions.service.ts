import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Function } from '../class/function';

@Injectable({
  providedIn: 'root'
})
export class FnfunctionsService {
  API_URL = 'https://localhost:8080/v2/';

  constructor(private http: HttpClient) { }

  loadFunctionsList(appId: string) {
    return this.http.get(this.API_URL + 'fns?app_id=' + appId);
  }

  getFunctionDetails(fnId: string): Observable<Function[]> {
    return this.http.get<Function[]>(this.API_URL + 'fns/' + fnId);
  }

  updateFunctionDetails(fnId: string, fnArray: Function) {
    const myheaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    let bodyString = JSON.stringify(fnArray);

    return this.http.put(this.API_URL + 'fns/' + fnId, bodyString, {headers: myheaders});
  }
}
