import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {IPatient} from '../models/interface.patient.model';
import {Patient} from '../class/class.patient';

import {fakeAsync} from '@angular/core/testing';
import {HistoricalService} from '../service/historical.service';
import {Historical} from '../class/class.historical';
import {AuthenticationService} from '../service/authentication.service';
import {first} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.page.html',
  styleUrls: ['./ficha-paciente.page.scss'],
})
export class FichaPacientePage implements OnInit {
  patient: Patient;
  historical: Historical;
  private idPaciente: number;
  headers: string[];



  constructor(
    private pacienteService: PacientesService,
    private  historicalService: HistoricalService,
    private  auth: AuthenticationService) {


/*    this.auth.getConfigResponsee()
      .subscribe( resp => {
        // mostrar headers
        const keys = resp.headers.keys();
        this.headers = keys.map( key =>
        `${key} : ${resp.headers.get(key)}`);
        // PRINT HEADERS

        console.log('PRINT MAP HEADERS ----------------------------------------------');
        console.log(this.headers);

        console.log(' acceso al body');
        console.log(resp.body);

      });*/
    // this.login();

    // this.loginPromise();
  }

  private loginPromise() {
    console.log('LOGIN PROMISE .ts ficha paciente');
    this.auth.loginPromise('admin', 'admin').then(
      (data: any) => {

        console.log('RESPUESTA EN FICHA PACINETE');
        console.log(data);

        console.log(data.body);
        this.auth.setSessionID(data.body.cookie);


      }
    );
  }

  // saveSessionID(response: any)

  private login() {
    console.log('header');
    // this.auth.login('admin', 'admin')
    this.auth.login('0000', 'test')
      .pipe(first())
      .subscribe((data: HttpResponse<any>) => {
        // console.log('header in in ');
        // console.log(data.headers);
        // console.log('header keys');
        // console.log(data.headers.keys());
        // console.log(data.headers.get('Set-Cookie'));
        // // console.log(data.headers.get('Server'));




      });
  }

  ngOnInit() {
    this.idPaciente = this.pacienteService.getIdPacient();

    this.getDataPatientFile();
  }


  private getDataPatientFile() {
    this.pacienteService.getPaciente(this.idPaciente).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);

      this.getDataPatientHistorical(this.patient.id);

    });
  }

  private getDataPatientHistorical(idPatient: number) {
    this.historicalService.getHistorical(idPatient).subscribe(data => {
      console.log('Historial paciente ', idPatient);
      console.log(data);
      this.historical = new Historical( data);

    });
  }

  add() {

  }
}
