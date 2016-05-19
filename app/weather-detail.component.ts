import { Component, Input, OnInit } from 'angular2/core';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-weather-detail',
  template: `
    <h3>This is weather detail component</h3>
    <div *ngIf="weather.sky.name !== undefined">
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
