import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavEstraServiceService {

  dates: any;
  constructor() { }

  public setExtras(data) {
    this.dates = data;
  }

  public getExtras() {
    return this.dates;
  }
}