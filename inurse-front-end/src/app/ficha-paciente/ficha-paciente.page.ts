import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../service/pacientes.service';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.page.html',
  styleUrls: ['./ficha-paciente.page.scss'],
})
export class FichaPacientePage implements OnInit {
  private paciente: any;

  constructor(private pacienteService: PacientesService) { }

  ngOnInit() {

    this.pacienteService.getPaciente(1).subscribe( data => this.paciente = data);
  }



}
