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
    console.log('hola soy el constructor paciente');
    console.log(data);

    this.firstName = data['results'][0]['first_name'];
    this.actualState = data['results'][0]['actualState'];
    this.age = data['results'][0]['age'];
    this.allergies = data['results'][0]['allergies'];
    this.assignedNurse = data['results'][0]['assignedNurse'];
    this.dni = data['results'][0]['dni'];
    this.height = data['results'][0]['height'];
    this.id = data['results'][0]['id'];
    this.lastName = data['results'][0]['last_name'];

    //TODO poner ROOM

    this.sex = data['results'][0]['sex'];
    this.sex = data['results'][0]['sex'];
    this.weight = data['results'][0]['weight'];


    if(this.sex=='m'){
      this.isMale = true;
    }else{
      this.isMale = false;
    }

  }




}
