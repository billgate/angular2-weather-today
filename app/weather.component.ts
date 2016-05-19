import { Component } from 'angular2/core';

import { WeatherService } from './weather.service';
import { WeatherDetailComponent } from './weather-detail.component';
import { Weather } from './weather';

@Component({
  selector: 'my-weather',
  template: `
    <h1> This is My Weather </h1>
    <input type="button" value="정보 가져오기" (click)="getWeather()">
    <my-weather-detail [weather]="_weather"></my-weather-detail>

  `,
  directives: [
    WeatherDetailComponent
  ]

})

export class WeatherComponent{

  _weather = new Weather();

  constructor(
    private _weatherService: WeatherService
  ) { }

  getImageUrl(code){
    return this._weatherService.getImageUrlByCode(code);
  }
  getWeather(){
    this._weatherService.getCurrentWeather("서울", "양천구", "신정동")
    .subscribe((weather) => {console.log(weather); this._weather = weather});
  }
}
