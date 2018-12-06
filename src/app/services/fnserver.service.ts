import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FnserverService {
  API_URL = 'https://localhost:8080/v2/';

  constructor(private http: HttpClient) { }

  // TODO : fix the GET /version on server
  getServerVersion() {
    return this.http.get(this.API_URL + 'version');
  }
}
