import {Component, Input, OnInit} from '@angular/core';
import { PlantasService } from '../service/plantas.service';
import {Floor} from '../class/class.floor';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {TokenStorageService} from '../service/token-storage.service';
import { Patient } from '../class/class.patient';

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
  private comprobacionPacienteFijado: string;
  private nombrePacienteFijado: string;
  private apellidoPacienteFijado: string;
  private buscador:boolean
  private pacienteBuscador: Patient;
  private pacienteList:any = []


  @Input()
  idPatient: any;
  private listRooms: any;

  constructor(private plantasService: PlantasService,
              private patientSevice: PacientesService,
              private router: Router,
              private authService: AuthenticationService
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
    this.buscador = false;
    this.nombrePacienteFijado = localStorage.getItem('nombrePacienteFijado');
    this.apellidoPacienteFijado = localStorage.getItem('apellidoPacienteFijado');
    this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
    console.log('Valor inicial paciente fijado: ' + this.comprobacionPacienteFijado)
    if (this.comprobacionPacienteFijado === null || undefined) {
      this.comprobacionPacienteFijado = '0';
    }
  }

  public verFichaPaciente( id: any){
    console.log('voy a ver la ficha paciente con ID', id);
    this.patientSevice.setIdPacient(id);
    this.router.navigate(['/ficha-paciente/']);
 }

  fijarPaciente(nombre: string, apellido: string) {
    console.log('Nombre paciente fijado: ' + nombre);
    console.log('Apellido paciente fijado: ' + apellido);
    localStorage.setItem('comprobacionPacienteFijado', '1');
    this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
    console.log('Paciente fijado: ' + this.comprobacionPacienteFijado);
    localStorage.setItem('nombrePacienteFijado', nombre);
    localStorage.setItem('apellidoPacienteFijado', apellido);
    this.nombrePacienteFijado = nombre;
    this.apellidoPacienteFijado = apellido;
  }
  desfijarPaciente() {
    localStorage.setItem('comprobacionPacienteFijado', '0');
    this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
    localStorage.clear();
    this.nombrePacienteFijado = undefined;
    this.apellidoPacienteFijado = undefined;
  }

  getRoomsAuth() {

    console.log('get rooms auth');
    this.plantasService.getRooms().subscribe( data => {
      this.listRooms = data;
    });
 }


 pantallaBuscador(value: any){

  this.pacienteList = []
   if (value != ''){

  var primeraPosicio:Number = parseInt(value.substring(0,1));
  if(Number.isFinite(primeraPosicio)){

    this.patientSevice.getPacienteDni(value).subscribe((response: any) => {
      response.results.forEach(element => {
        this.pacienteList.push(element);
      });
      console.log("RESULTS ", response.results);
      console.log("PACIENTE ", this.pacienteList);
      if(response['count'] !== 0){
        this.buscador = true;
      } else {
        this.buscador = false;
     }
    })

  } else if(!Number.isFinite(primeraPosicio)){


    this.patientSevice.getPacienteName(value).subscribe((response: any = []) => {

      if(response.results[1] == null) {
        console.log("nomes una persona")
        response.results.forEach(element => {
          this.pacienteList.push(element);
        });

      console.log("PACIENTE ", this.pacienteList);


      } else{
        console.log("varies persona")
        response.results.forEach(element => {
          this.pacienteList.push(element);
        });
     // this.pacienteList.push(response.results);
      console.log("RESULTS ", response.results);
      console.log("PACIENTE ", this.pacienteList);
    }
      if(response['count'] !== 0){
        this.buscador = true;
      } else {
        this.buscador = false;
     }
    })

  }

 } else {
   this.buscador = false;
 }

}

  refreshLogin() {
    this.authService.refreshToken().subscribe( data => {
      console.log('token refresh' , data );
    });
  }
}
