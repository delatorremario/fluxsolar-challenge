import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CityService } from '../city.service';
import { WorldweatheronlineService } from '../worldweatheronline.service';
import { IWeather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: IWeather;
  error: string;
  constructor(
    private cityService: CityService,
    private worldweatheronlineService: WorldweatheronlineService
  ) {}
  ngOnInit(): void {
    this.getCities();
  }
  cityList: string[] = [];
  form = new FormGroup({
    city: new FormControl('', Validators.required)
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    this.worldweatheronlineService.getWeather(this.form.value.city).subscribe(
      data => {
        this.error="";
        this.weather = data;
      },
      err => {
        this.error="Hubo un problema. Intente nuevamente en unos momentos. Gracias!";
        this.weather = undefined;
        console.log('ERROR', err);
      }
    );
  }
  getCities(): void {
    this.cityService.getCities().subscribe(cities => (this.cityList = cities));
  }
}
