import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WorldweatheronlineService {
  constructor(private http: HttpClient) {}
  getWeather(city: string = ''): Observable<IWeather> {

    const key = '50306801e9b340c680b00403200805';
    const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${key}&q=${city}&format=json`;

    return this.http.get<IWeather>(url);
  }
}
