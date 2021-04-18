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
  
}
