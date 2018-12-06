import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FncallsService {
  API_URL = 'https://localhost:8080/v2/';

  constructor(private http: HttpClient) { }

  loadCallsList(fnId: string) {
    return this.http.get(this.API_URL + 'fns/' + fnId + '/calls');
  }

  getLogDetail(fnId: string, callId: string) {
    return this.http.get(this.API_URL + 'fns/' + fnId + '/calls/' + callId + '/log');
  }
}
