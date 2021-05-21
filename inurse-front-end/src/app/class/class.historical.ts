import {IHistorical} from '../models/interface.historical.model';
import {Visit} from './class.visit';

export class Historical implements IHistorical{
  visits: Visit[];

  constructor(data: any) {
    this.visits = [];
    // console.log('hola soy el constructor historial');
    // console.log(data);


/*    for (let i = 0; i < data.results.length; i++){
      // console.log(data['results'][i]['nurse']);
      // console.log(data['results'][i]['created_at']);
      // console.log(data['results'][i]['description']);

      this.visits.push( new Visit( data.results[i]));

    }*/
    for (const visit of data.results){
      if (visit){
        // console.log(visit);

        this.visits.push(new Visit(visit));
      }
    }

  }



}
