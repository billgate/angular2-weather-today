export class Weather {
  constructor(){
    this.station = { name: <string> null };
    this.sky = { name: <string> null };
    this.temperature = { tc: <string> null };
  }
  station: { name: string };
  sky: {name: string};
  temperature: {tc:string};
  timeObservation: Date;
}
