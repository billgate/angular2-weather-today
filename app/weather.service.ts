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

    _weatherImgSrc : string = "/resources/img/weather/";

    _weatherMap : Object = {
      "SKY_A00" : { "day" : "38", "night": "38" },
      "SKY_A01" : { "day" : "01", "night": "08"  },
      "SKY_A02" : { "day" : "02", "night": "09"  },
      "SKY_A03" : { "day" : "03", "night": "10" },
      "SKY_A04" : { "day" : "12", "night": "40" },
      "SKY_A05" : { "day" : "13", "night": "41" },
      "SKY_A06" : { "day" : "14", "night": "42" },
      "SKY_A07" : { "day" : "18", "night": "18" },
      "SKY_A08" : { "day" : "21", "night": "21" },
      "SKY_A09" : { "day" : "32", "night": "32" },
      "SKY_A10" : { "day" : "04", "night": "04"  },
      "SKY_A11" : { "day" : "29", "night": "29" },
      "SKY_A12" : { "day" : "26", "night": "26" },
      "SKY_A13" : { "day" : "27", "night": "27" },
      "SKY_A14" : { "day" : "28", "night": "28" },

    };
    constructor(
      private http: Http
    ) {
      this._headers = new Headers();
      this._headers.append('appKey', this._appKey);
    }

    getCurrentWeather(city, county, village){
      let searchParams = new URLSearchParams();

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

    getImageUrlByCode(c){
      let code = "SKY_A00";
      let dayOrNight = "day";

      if(c !== undefined){
        code = c;
      }

      if(code !== undefined)
        return this._weatherImgSrc + this._weatherMap[code][dayOrNight] + ".png";
      else
        return null;
    }
}
