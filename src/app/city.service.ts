import { Injectable } from '@angular/core';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor() {
    this.cityList = CITIES;
  }

  cityList: string[] = [];

  getCities(): Observable<string[]> {
    return of(this.cityList);
  }
  add(city: string) {
    this.cityList.push(city);
  }
}
