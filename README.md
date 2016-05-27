angular2-weather-today
--

### 개요
![enter image description here](http://i67.tinypic.com/35hpjya.png)
  angular2 를 이용한 날씨 확인 application 입니다. angular2 http provider, rxjs 의 Observable 등을 이용하여 날씨 api 를 가져오고 화면에 결과를 표현합니다.
 날씨 API 는 SK Planet 의 [weather planet](https://developers.skplanetx.com/apidoc/kor/weather/) 을 활용하였습니다.

### 사용법
아래 명령어를 사용하면 http://localhost:3000 에서 동작합니다.
```
npm install
npm start
```

>npm 과 bower 가 설치 되어 있어야 합니다.

### 의존

	  "dependencies": {
	    "angular2": "2.0.0-beta.15",
	    "es6-shim": "^0.35.0",
	    "reflect-metadata": "0.1.2",
	    "rxjs": "5.0.0-beta.2",
	    "systemjs": "0.19.26",
	    "zone.js": "0.6.10"
	  },
	  "devDependencies": {
	    "concurrently": "^2.0.0",
	    "lite-server": "^2.2.0",
	    "typescript": "^1.8.10",
	    "typings": "^0.7.12",
	    "bootstrap": "git://github.com/twbs/bootstrap.git#v4.0.0-alpha.2"
	  },


### 참조
- [angular2 document](https://angular.io/docs/ts/latest/) 를 참조하였습니다.
-  UI 를 위해 Bootstrap UI 를 참조 하였습니다.
- 그 외 구글링 을 통하여 정보를 수집하였습니다.
