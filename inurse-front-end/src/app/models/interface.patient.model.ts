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

  tension: string;
  temperature: string;
  heardRate: string;
}

