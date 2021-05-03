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

    this.firstName = data['first_name'];
    this.actualState = data['actualState'];
    this.age = data;
    this.allergies = data['allergies'];
    this.assignedNurse = data['assignedNurse'];
    this.dni = data['dni'];
    this.height = data['height'];
    this.id = data['id'];
    this.lastName = data['last_name'];

    //TODO poner ROOM

    this.sex = data['sex'];


    this.weight = data['weight'];


    if (this.sex == 'm'){
      this.isMale = true;
    }else{
      this.isMale = false;
    }

  }




}
