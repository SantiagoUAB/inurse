import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Patient } from '../class/class.patient';
import { PacientesService } from '../service/pacientes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  @Input() pacienteList: any;
  constructor(  private patientSevice: PacientesService,
    private router: Router) { }

  ngOnInit() {

  }



  verFichaPaciente( id: any){
    console.log('id paciente wey', id);
    this.patientSevice.setIdPacient(id);
    this.router.navigate(['/show-patient/']);
 }

}

