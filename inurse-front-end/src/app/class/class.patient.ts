import {IPatient} from '../models/interface.patient.model';

export  class Patient implements IPatient{

  heardRate: string;
  height: number;
  history: string[];
  img: string;
  name: string;
  status: string[];
  temperature: string;
  tension: string;
  weight: number;

  constructor(data: any) {
    console.log('hola soy el constructor paciente');
    console.log(data);
    this.name =data['results'][0]['name']['first'];
    this.img =data['results'][0]['picture']['large'];
  }
}
