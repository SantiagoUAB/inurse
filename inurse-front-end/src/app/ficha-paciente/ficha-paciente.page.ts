import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {IPatient} from '../models/interface.patient.model';
import {Patient} from '../class/class.patient';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.page.html',
  styleUrls: ['./ficha-paciente.page.scss'],
})
export class FichaPacientePage implements OnInit {
  private patient: Patient;
  private urlImg: string;
  private dataLoad: boolean
  private idPaciente: string;


  constructor(private pacienteService: PacientesService) {



  }

  ngOnInit() {
    this.idPaciente = "0000000G";

    this.pacienteService.getPaciente("0000000G").subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);
    });


  }


  add() {

  }
}
