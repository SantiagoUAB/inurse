import {IUser} from '../models/interface.user.model';

export  class User implements IUser{
  username: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  constructor(data: any) {
    if (this.username === null) {
      console.log('Usuario encontrado');
    }
    else {
      this.username = data['detail'];
    }
    console.log('hola soy el constructor paciente');
    console.log(data);
    //TODO poner ROOM

  }
}
