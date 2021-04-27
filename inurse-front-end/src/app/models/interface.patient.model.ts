export interface IPatient{
  id:number;
  roomId: number;
  firstName: string;
  lastName: string;
  dni: string;
  age:number;
  sex: string;
  height: number;
  weight: number;
  allergies: string;
  actualState:string;
  assignedNurse: number;

  //clase Room //crear clase?
  history: string[];
  status: string; //los diferentes iocnos de estado
  tension: string;
  temperature: string;
  heardRate: string;
}

 function loadData(data : any){}
