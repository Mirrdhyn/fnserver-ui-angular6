import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FnappsService {
  API_URL = 'https://localhost:8080/v2/';
  constructor(private http: HttpClient) { }

  loadAppsList() {
    return this.http.get(this.API_URL + 'apps');
  }

  getAppDetails(appId: string) {
    return this.http.get(this.API_URL + 'apps/' + appId);
  }
}
