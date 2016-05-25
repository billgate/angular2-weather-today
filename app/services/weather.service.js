System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(http) {
                    this.http = http;
                    this._weatherUrl = "http://apis.skplanetx.com/weather/current/minutely";
                    this._appKey = "a56cde6c-aa0f-346f-89b4-749ac232a710";
                    this._weatherImgSrc = "/resources/img/weather/";
                    this._weatherMap = {
                        "SKY_A00": { "day": "38", "night": "38" },
                        "SKY_A01": { "day": "01", "night": "08" },
                        "SKY_A02": { "day": "02", "night": "09" },
                        "SKY_A03": { "day": "03", "night": "10" },
                        "SKY_A04": { "day": "12", "night": "40" },
                        "SKY_A05": { "day": "13", "night": "41" },
                        "SKY_A06": { "day": "14", "night": "42" },
                        "SKY_A07": { "day": "18", "night": "18" },
                        "SKY_A08": { "day": "21", "night": "21" },
                        "SKY_A09": { "day": "32", "night": "32" },
                        "SKY_A10": { "day": "04", "night": "04" },
                        "SKY_A11": { "day": "29", "night": "29" },
                        "SKY_A12": { "day": "26", "night": "26" },
                        "SKY_A13": { "day": "27", "night": "27" },
                        "SKY_A14": { "day": "28", "night": "28" },
                    };
                    this._headers = new http_1.Headers();
                    this._headers.append('appKey', this._appKey);
                }
                WeatherService.prototype.getCurrentWeather = function (city, county, village) {
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set("version", "1");
                    searchParams.set("city", city);
                    searchParams.set("county", county);
                    searchParams.set("village", village);
                    return this.http.get(this._weatherUrl, { headers: this._headers, search: searchParams })
                        .map(this.extractData)
                        .catch(this.errorHandle);
                };
                WeatherService.prototype.extractData = function (res) {
                    var result = res.json().result;
                    if (result.code === 9200) {
                        var weather = res.json().weather.minutely[0];
                        return weather;
                    }
                };
                WeatherService.prototype.errorHandle = function (res) {
                    var error = res.json().error;
                    console.error(error.code + " / " + error.message);
                    return Observable_1.Observable.throw(error);
                };
                WeatherService.prototype.getImageUrlByCode = function (c) {
                    var code = "SKY_A00";
                    var dayOrNight = "day";
                    if (c !== undefined) {
                        code = c;
                    }
                    if (code !== undefined)
                        return this._weatherImgSrc + this._weatherMap[code][dayOrNight] + ".png";
                    else
                        return null;
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});
//# sourceMappingURL=weather.service.js.map