import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FntriggersService {
  API_URL = 'https://localhost:8080/v2/';

  constructor(private http: HttpClient) { }

  loadTriggersList(appId: string) {
    return this.http.get(this.API_URL + 'triggers?app_id=' + appId);
  }

  getTriggerDetails(fnId: string) {
    return this.http.get(this.API_URL + 'triggers/' + fnId);
  }
}
