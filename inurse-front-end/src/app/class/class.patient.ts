import {IPatient} from '../models/interface.patient.model';

export  class Patient implements IPatient{

  heardRate: string;
  height: number;
  history: string[];
  img: string;
  firstName: string;
  status: string;
  temperature: string;
  tension: string;
  weight: number;

  actualState: string;
  age: number;
  allergies: string;
  assignedNurse: number;
  dni: string;
  lastName: string;
  roomId: number;
  sex: string;
  id: number;

  isMale:boolean;



  constructor(data: any) {
    if (this.dni === null) {
      console.log('mfiero');
    }
    else {
      this.dni = data['results'][0]['dni'];
    }
    console.log('hola soy el constructor paciente');
    console.log(data);

    //this.dni = data['results'][0]['dni'];

    //TODO poner ROOM



    if(this.sex=='m'){
      this.isMale = true;
    }else{
      this.isMale = false;
    }

  }




}
