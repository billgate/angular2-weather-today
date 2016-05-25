import { Component, Input, OnInit } from 'angular2/core';

import { Weather } from '../models/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'my-weather-detail',
  template: `
    <div *ngIf="weather.sky.name !== undefined" style="text-align:center;">
      <div>
        <img [src]="getWeatherImage(weather.sky.code)" />
      </div>
      {{ weather.station.name }} / {{ weather.sky.name }} / {{ weather.temperature.tc  }} 도
    </div>
  `
})

export class WeatherDetailComponent{

  @Input()
  weather;
  @Input()
  imageUrl : string;

  constructor(
    private weatherService : WeatherService
  ) {}

  getWeatherImage(code){
    return this.weatherService.getImageUrlByCode(code);
  }

}
