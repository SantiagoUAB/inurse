import {Component, Input, OnInit} from '@angular/core';
import { PlantasService } from '../service/plantas.service';
import{Floor} from '../class/class.floor';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {TokenStorageService} from '../service/token-storage.service';

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
  private listRooms: any;

  constructor(private plantasService: PlantasService,
              private patientSevice: PacientesService,
              private router: Router,
              ) {
    this.idPatient = 1; // paciente por defecto
    this.loadPlantas();
    this.loadPacientes();


    console.log(this.resultado);
   }

  private loadPacientes() {
    this.plantasService.getPaciente().subscribe(data => {
      console.log('Pacientes');
      console.log(data);
      this.roomPacientes = data['results'];

      console.log(this.roomPacientes);
      console.log('poner planta 1 por defecto');
      this.cambioPlanta(1);
    });
  }

  private loadPlantas() {
    this.plantasService.getPlantas().subscribe(data => {
      console.log('Plantas');
      console.log(data);
      this.planta = new Floor(data);
      this.arrayPlanta = this.planta.results;

    });
  }

  cambioPlanta(planta){
    console.log('Poner la planta ', planta);
    this.lista = [];
    for (let file of this.roomPacientes) {
      if (planta == (file['room']['floor']['floor_num'])){
      this.aux2 = [file['room']['room_num'],file['first_name'],file['last_name'], file.id];
      this.lista.push(this.aux2);
      }

   }
    this.listaPaciente = this.lista.sort();
    console.log(this.listaPaciente);

}
  ngOnInit() {
  }

  verFichaPaciente( id: any){
    console.log('id paciente wey', id);
    this.patientSevice.setIdPacient(id);
    this.router.navigate(['/ficha-paciente/']);
 }

  getRoomsAuth(){

    console.log('get rooms auth');
    this.plantasService.getRooms().subscribe( data => {
      this.listRooms = data;
    });
 }
}
