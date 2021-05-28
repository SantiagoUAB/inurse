import {IPatient} from '../models/interface.patient.model';

export  class Patient implements IPatient{

  public static STATUS_NONE = '---';
  public static STATUS_TREATMENT = 'treatment';
  public static STATUS_WAITING = 'waiting for results';
  public static STATUS_IN_SURGERY = 'in surgery';

  heardRateActual: string;
  heardRateNew: string;
  height: number;
  history: string[];
  firstName: string;
  temperatureActual: string;
  temperatureNew: string;
  tensionActual: string;
  tensionNew: string;
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

  mapCurrentStatus: Map<string, string>;


  setTension(value: string){

    this.tensionActual = value;
  }

  setTensionNew(value: string){

    if ( this.tensionActual === value){

      console.log('same values tension');
    }
    this.tensionNew = value;
  }

  setTemperature(value: string){

    if ( this.temperatureActual === value){

      console.log('same values temperature');
    }
    this.temperatureActual = value;
  }

  setHeardRate(value: string){

    if ( this.heardRateActual === value){

      console.log('same values heardRate');
    }
    this.heardRateActual = value;
  }

  getTension(){
    return this.tensionActual;
  }

  getTemperature(){
    return this.temperatureActual;
  }

  getHeardRate(){
    return this.heardRateActual;
  }

  getFirstName(): any{
    return this.firstName;
  }
  constructor(data: any) {
    console.log('hola soy el constructor paciente');
    // console.log(data);

    this.firstName = data.first_name;
    this.age = data.age;
    this.allergies = data.allergies;
    this.currentStatus = data.current_status;
    this.heardRateActual = data.heart_rate;
    this.dni = data.dni;
    this.height = data.height;
    this.id = data.id;
    this.lastName = data.last_name;
    this.sex = data.sex;
    this.temperatureActual = data.temperature;
    this.tensionActual = data.tension;
    this.weight = data.weight;
    this.roomId = data.room.id;

    this.mapCurrentStatus = new Map<string, string>();

    this.mapCurrentStatus.set(Patient.STATUS_NONE, '0');
    this.mapCurrentStatus.set(Patient.STATUS_TREATMENT, '1');
    this.mapCurrentStatus.set(Patient.STATUS_IN_SURGERY, '2');
    this.mapCurrentStatus.set(Patient.STATUS_WAITING, '3');


    console.log(this.mapCurrentStatus);

    if (this.sex == 'Man'){
      this.isMale = true;
    }else{
      this.isMale = false;
    }

  }


  private initMap() {
    this.mapCurrentStatus = new Map<string, string>();

    this.mapCurrentStatus.set(Patient.STATUS_NONE, '0');
    this.mapCurrentStatus.set(Patient.STATUS_TREATMENT, '1');
    this.mapCurrentStatus.set(Patient.STATUS_IN_SURGERY, '2');
    this.mapCurrentStatus.set(Patient.STATUS_WAITING, '3');
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

  getCurrentStatusText() {
    return this.currentStatus;
  }
  getCurrentStatusNum(){
    return this.mapCurrentStatus.get(this.currentStatus);

  }

  setCurrentStatus(value: any) {

    switch (value){
      case '0':
        this.currentStatus = Patient.STATUS_NONE;
        break;
      case '1':
        this.currentStatus = Patient.STATUS_TREATMENT;
        break;
      case '2':
        this.currentStatus = Patient.STATUS_IN_SURGERY;
        break;
      case '3':
        this.currentStatus = Patient.STATUS_WAITING;
        break;
      default:
        this.currentStatus = Patient.STATUS_NONE;
        break;
    }
  }

  getTensionNew() {
    return this.tensionNew;
  }

  getTemperatureNew() {
    return  this.temperatureNew;
  }

  getHeardRateNew() {
    return this.heardRateNew;
  }

  setTemperatureNew(newValue: string) {
    this.tensionNew = newValue;

  }

  setHeardRateNew(newValue: string) {
    this.heardRateNew = newValue;
  }
}
