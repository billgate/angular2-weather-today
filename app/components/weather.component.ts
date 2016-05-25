import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import { WeatherService } from '../services/weather.service';
import { WeatherDetailComponent } from './weather-detail.component';
import { Weather } from '../models/weather';

@Component({
  selector: 'my-weather',
  template: `
    <div class="container" style="margin-top:20px;">
      <form (ngSubmit)="onSubmit()" style="text-align:center;">
        <div class="form-group form-inline">
          <label class="form-control-label" for="city">시</label>
          <input type="text" class="form-control" (keydown)="onKeydownCity($event)" [value]="city" />
        </div>
        <div class="form-group form-inline">
          <label class="form-control-label"  for="county">구</label>
          <input type="text" class="form-control" (keydown)="onKeydownCounty($event)" [value]="county" />
        </div>
        <div class="form-group form-inline">
          <label class="form-control-label"  for="village">동</label>
          <input type="text" class="form-control"(keydown)="onKeydownVillage($event)"  [value]="village" />
        </div>
        <div class="form-group form-inline">
          <input type="submit" class="btn btn-default" value="정보 가져오기">
        </div>
      </form>
      <my-weather-detail [weather]="weather"></my-weather-detail>
    </div>
  `,
  directives: [
    WeatherDetailComponent
  ]

})

export class WeatherComponent{

  weather = new Weather();

  city : string     = "서울";
  county : string   = "양천구";
  village : string  = "신정동";

  constructor(
    private _weatherService: WeatherService
  ) { }

  /* 양방향 ngModel 사용시 한글 문제 있어서 onKeydown 으로 대체 */
  onKeydownCity(event)    { this.city = event.target.value; }
  onKeydownCounty(event)  { this.county = event.target.value; }
  onKeydownVillage(event) { this.village = event.target.value; }

  onSubmit(){
    this._weatherService.getCurrentWeather(this.city, this.county, this.village)
    .subscribe(
      (weather) => { console.log(weather); this.weather = weather; },
      (error)   => { alert(error.message); console.log(error); }
    );
  }

  getImageUrl(code){
    return this._weatherService.getImageUrlByCode(code);
  }
}
