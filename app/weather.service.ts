import { Injectable } from 'angular2/core';
import { Headers, Http, RequestOptions, URLSearchParams } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


import { Weather } from './weather';

@Injectable()
export class WeatherService{
    _weather    ;
    _headers    : Headers;
    _weatherUrl : string = "http://apis.skplanetx.com/weather/current/minutely";
    _appKey     : string = "a56cde6c-aa0f-346f-89b4-749ac232a710";

    constructor(
      private http: Http
    ) {
      this._headers = new Headers();
      this._headers.append('appKey', this._appKey);
    }

    getCurrentWeather(city, county, village){
      let searchParams = new URLSearchParams();
      this._weather = "fcu";

      searchParams.set("version", "1");
      searchParams.set("city",    city);
      searchParams.set("county", county);
      searchParams.set("village", village);

      return this.http.get(this._weatherUrl, {headers: this._headers, search: searchParams })
        .map(this.extractData)
        .catch(this.errorHandle);

    }

    extractData(res){
        let result = res.json().result;
        if(result.code === 9200){
          let weather = res.json().weather.minutely[0];

          return weather;
        }
    }

    errorHandle(res : any){
      let error = res.json().error;
      console.error(error.code + " / " + error.message);

      return Observable.throw(error);
    }
}
