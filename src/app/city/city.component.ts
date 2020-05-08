import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  constructor(private cityService: CityService) {}
  ngOnInit(): void {}
  city: string = '';
  form = new FormGroup({
    city: new FormControl('', Validators.required)
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    this.cityService.add(this.form.value.city);
    this.form.reset();
  }
}
