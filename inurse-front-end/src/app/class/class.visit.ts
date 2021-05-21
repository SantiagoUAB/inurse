export class Visit{
  createdTimestamp: string;
  data: Date;
  description: string;
  id: number;
  nurse: string;
  patient: number;
  treatment: string;



  constructor(data: any) {

    // console.log('soy el constructor Visita');
    // console.log(data);


    // this.createdTimestamp =  data['created_at'];
    this.data =  new Date(data.date);
    this.id =  data.id;
    this.patient = data.patient;
    this.treatment = data.treatment;
    // this.nurse =  data['nurse'];
    // this.description =  data['description'];
  }

}
