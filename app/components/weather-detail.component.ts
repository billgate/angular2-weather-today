import { Component, Input, OnInit } from 'angular2/core';

import { Weather } from '../models/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'my-weather-detail',
  templateUrl: 'app/templates/weather-detail.component.html'
})

export class WeatherDetailComponent{

  @Input()
  weather;

  constructor(
    private weatherService : WeatherService
  ) {}

  getWeatherImage(code){
    return this.weatherService.getImageUrlByCode(code);
  }

}
