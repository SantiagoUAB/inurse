import {Component, Input, OnInit} from '@angular/core';
import { PlantasService } from '../service/plantas.service';
import{Floor} from '../class/class.floor';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.page.html',
  styleUrls: ['./pantalla-principal.page.scss'],
})
export class PantallaPrincipalPage implements OnInit {

  private arrayPlanta: Array<any>;
  private resultado: Array<any>;
  private planta: Floor;
  private roomPacientes: Array<any>;
  private aux2: string[];
  private habitacion: string;
  private lista: any[];
  private listaPaciente: any[];

  @Input()
  idPatient: any;

  constructor(private plantasService: PlantasService,
              private patientSevice: PacientesService,
              private router: Router,) {
    this.idPatient = 1;
    this.plantasService.getPlantas().subscribe(data => {
      console.log('Plantas');
      console.log(data);
      this.planta = new Floor(data);
      this.arrayPlanta = this.planta.results;

    });

    this.plantasService.getPaciente().subscribe(data => {
      console.log('Pacientes');
      console.log(data);
      this.roomPacientes = data['results'];

      console.log(this.roomPacientes);

      this.cambioPlanta(1);
    });


    console.log(this.resultado);


   }
  cambioPlanta(planta){
    this.lista = [];
    for (let file of this.roomPacientes) {
      if (planta == (file['room']['floor']['floor_num'])){
      this.aux2 = [file['first_name'],file['room']['room_num'], file.id];
      this.lista.push(this.aux2);
      }

   }
    this.listaPaciente = this.lista;
    console.log(this.listaPaciente);

}
  ngOnInit() {
  }

  verFichaPaciente( id: any){
    console.log('id paciente wey', id);
    this.patientSevice.setIdPacient(id);
    this.router.navigate(['/ficha-paciente']);
 }
}
