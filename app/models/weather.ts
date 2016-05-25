export class Weather {
  constructor(){
    this.station = { name: <string> undefined };
    this.sky = { name: <string> undefined };
    this.temperature = { tc: <string> undefined };
  }
  sky : {name: string};
  station : { name: string };
  huminity : string;
  temperature : {tc:string};
  timeObservation : Date;
}
