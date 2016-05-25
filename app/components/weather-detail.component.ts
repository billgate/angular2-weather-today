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
      <div class="col-md-offset-4">
        <div class="form-group row">
          <label class="form-control-label col-sm-2">위치</label>
          <div class="col-sm-3">
            <p class="form-control-static">{{ weather.station.name }}</p>
          </div>
        </div>
        <div class="form-group row">
          <label class="form-control-label col-sm-2">날씨</label>
          <div class="col-sm-3">
            <p class="form-control-static">{{ weather.sky.name }}</p>
          </div>
        </div>
        <div class="form-group row">
          <label class="form-control-label col-sm-2">온도</label>
          <div class="col-sm-3">
            <p class="form-control-static">{{ weather.temperature.tc }} 도</p>
          </div>
        </div>
        <div class="form-group row">
          <label class="form-control-label col-sm-2">측정시간</label>
          <div class="col-sm-3">
            <p class="form-control-static">{{ weather.timeObservation }}</p>
          </div>
        </div>
      </div>
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
