export class Weather {
  constructor(){
    this.station = { name: <string> undefined };
    this.sky = { name: <string> undefined };
    this.temperature = { tc: <string> undefined };
  }
  station: { name: string };
  sky: {name: string};
  temperature: {tc:string};
  timeObservation: Date;
}
