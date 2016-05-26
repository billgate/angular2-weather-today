System.register(['angular2/core', '../services/weather.service', './weather-detail.component', '../models/weather'], function(exports_1, context_1) {
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
    var core_1, weather_service_1, weather_detail_component_1, weather_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_detail_component_1_1) {
                weather_detail_component_1 = weather_detail_component_1_1;
            },
            function (weather_1_1) {
                weather_1 = weather_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.weather = new weather_1.Weather();
                    this.city = "서울";
                    this.county = "양천구";
                    this.village = "신정동";
                }
                /* 양방향 ngModel 사용시 한글 문제 있어서 onKeydown 으로 대체 */
                WeatherComponent.prototype.onKeydownCity = function (event) { this.city = event.target.value; };
                WeatherComponent.prototype.onKeydownCounty = function (event) { this.county = event.target.value; };
                WeatherComponent.prototype.onKeydownVillage = function (event) { this.village = event.target.value; };
                WeatherComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._weatherService.getCurrentWeather(this.city, this.county, this.village)
                        .subscribe(function (weather) { _this.weather = weather; console.log(weather); }, function (error) { alert(error.message); console.log(error); });
                };
                WeatherComponent.prototype.getImageUrl = function (code) {
                    return this._weatherService.getImageUrlByCode(code);
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'my-weather',
                        templateUrl: 'app/templates/weather.component.html',
                        directives: [
                            weather_detail_component_1.WeatherDetailComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherComponent);
                return WeatherComponent;
            }());
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.component.js.map