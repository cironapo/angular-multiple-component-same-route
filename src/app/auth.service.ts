import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  config: any;
  constructor(
    private http: HttpClient
  ) { }

  /**
   * load data from assets/config.json
   */
  load() {
    return this.http.get('/assets/config.json').subscribe((data)=>{
      this.config = data;
    });
  }
  /**
   * check if user is Admin
   */
  isAdmin(): boolean{
    return this.config.profile === 'admin';
  }
  /**
   * check if user is Base
   */
  isBase(): boolean{
    return this.config.profile === 'base';
  }
}
