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


  constructor(private pacienteService: PacientesService) {
    this.urlImg = 'https://thispersondoesnotexist.com/image';
    this.urlImg = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
    this.dataLoad = false;

  }

  ngOnInit() {

    this.pacienteService.getPaciente(1).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);
      this.dataLoad = true;


    });


  }


  add() {

  }
}
