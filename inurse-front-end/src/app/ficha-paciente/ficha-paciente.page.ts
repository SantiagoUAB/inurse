import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {IPatient} from '../models/interface.patient.model';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.page.html',
  styleUrls: ['./ficha-paciente.page.scss'],
})
export class FichaPacientePage implements OnInit {
  private patient: IPatient;
  private urlImg: string;


  constructor(private pacienteService: PacientesService) {
    this.urlImg = 'https://thispersondoesnotexist.com/image';

  }

  ngOnInit() {

    this.pacienteService.getPaciente(1).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);

      console.log(data['results'][0]['name']['first']);

    });


  }


}
