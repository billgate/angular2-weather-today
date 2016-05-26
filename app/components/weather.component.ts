import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import { WeatherService } from '../services/weather.service';
import { WeatherDetailComponent } from './weather-detail.component';
import { Weather } from '../models/weather';

@Component({
  selector: 'my-weather',
  templateUrl: 'app/templates/weather.component.html',
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
      (weather) => { this.weather = weather; console.log(weather); },
      (error)   => { alert(error.message); console.log(error); }
    );
  }

  getImageUrl(code){
    return this._weatherService.getImageUrlByCode(code);
  }
}
