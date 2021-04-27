export class Visit{
  createdTimestamp: string;
  data: Date;
  description: string;
  id: number;
  nurse: string;
  patient: number;

  constructor(data: any) {
    this.createdTimestamp = data['results']



    this.createdTimestamp =  data['created_at'];
    this.data =  new Date(data['created_at']);
    this.id =  data['id'];
    this.nurse =  data['nurse'];
    this.description =  data['description'];
  }

}
