import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.page.html',
  styleUrls: ['./pantalla-principal.page.scss'],
})
export class PantallaPrincipalPage implements OnInit {

  private plantas:string[];


  constructor() {
    this.plantas=['Planta 0','Planta 1','Planta 2','Planta 3','Planta 4','Planta 5','Planta 6','Planta 7','Planta 8','Planta 9','Planta 10'];
    console.log(this.plantas);
   }
  cambioPlanta(planta){
    console.log(planta)

  }
  ngOnInit() {
  }

}
