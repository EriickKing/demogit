import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public api = "https://api.github.com/users/"

  constructor(
    private http: HttpClient
  ) { }

  GET_REPOS(user) {
    return this.http.get(this.api + user);
  }

  ANY_HTTP(url) {
    return this.http.get(url);
  }
}
