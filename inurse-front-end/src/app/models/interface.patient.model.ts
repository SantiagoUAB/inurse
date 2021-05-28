export interface IPatient{
  id: number;
  roomId: number;
  firstName: string;
  lastName: string;
  dni: string;
  age: number;
  sex: string;
  height: number;
  weight: number;
  allergies: string;
  currentStatus: string;
  assignedNurse: number;

  // clase Room //crear clase?
  history: string[];

  tensionActual: string;
  temperatureActual: string;
  heardRateActual: string;
}

