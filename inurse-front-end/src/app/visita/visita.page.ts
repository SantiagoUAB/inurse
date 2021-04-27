import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../service/pacientes.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.page.html',
  styleUrls: ['./visita.page.scss'],
})
export class VisitaPage implements OnInit {
  pacientName = '';
  username = '';
  information = '';
  myDate = '';
  myHour = '';
  data: any;


  constructor(private pacienteService: PacientesService,) { }

  ngOnInit() {
  }
  async confirmVisit() {
    //this.data {'nurse': "Nurse 2", 'description': "blablabla", 'patient': "2"};
    this.data = JSON.stringify(
      [
        {
          "nurse": "this.username",
          "description": "this.information"
        },
      ]);
    this.pacienteService.postVisita(this.data).subscribe(data => {
      console.log(data);
    });
  }
}
