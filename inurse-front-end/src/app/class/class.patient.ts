import {IPatient} from '../models/interface.patient.model';

export  class Patient implements IPatient{

  heardRate: string;
  height: number;
  history: string[];
  img: string;
  firstName: string;

  temperature: string;
  tension: string;
  weight: number;

  currentStatus: string;
  age: number;
  allergies: string;
  assignedNurse: number;
  dni: string;
  lastName: string;
  roomId: number;
  sex: string;
  id: number;

  isMale: boolean;


  setTension(value: string){
    this.tension = value;
  }

  setTemperature(value: string){
    this.temperature = value;
  }

  setHeardRate(value: string){
    this.heardRate = value;
  }

  getTension(){
    return this.tension;
  }

  getTemperature(){
    return this.temperature;
  }

  getHeardRate(){
    return this.heardRate;
  }

  getFirstName(): any{
    return this.firstName;
  }
  constructor(data: any) {
    console.log('hola soy el constructor paciente');
    console.log(data);

    console.log(data.heart_rate);
    console.log(data.temperature);
    console.log(data.tension);

    this.firstName = data.first_name;
    this.age = data.age;
    this.allergies = data.allergies;
    this.currentStatus = data.current_status;
    this.heardRate = data.heart_rate;
    this.dni = data.dni;
    this.height = data.height;
    this.id = data.id;
    this.lastName = data.last_name;
    this.sex = data.sex;
    this.temperature = data.temperature;
    this.tension = data.tension;
    this.weight = data.weight;
    this.roomId = data.room.id;


    if (this.sex == 'Man'){
      this.isMale = true;
    }else{
      this.isMale = false;
    }

  }


  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }

  getDni() {
    return this.dni;
  }

  getRoom() {
    // TODO mirar donde se carga el valor
    return this.roomId;
  }

  getSex() {
    return this.sex;
  }

  getHeight() {
    return this.height;
  }

  getAllergies() {
    return this.allergies;
  }

  getCurrentStatus() {
    return this.currentStatus;
  }

  setCurrentStatus(value: any) {

    switch (value){
      case '0':
        this.currentStatus = '---';
        break;
      case '1':
        this.currentStatus = 'treatment';
        break;
      case '2':
        this.currentStatus = 'in surgery';
        break;
      case '3':
        this.currentStatus = 'waiting for results';
        break;
      default:
        this.currentStatus = '---';
        break;
    }

  }
}
