import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {ClassGlobalConstants} from '../class/class.globalConstants';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.page.html',
  styleUrls: ['./show-patient.page.scss'],
})
export class ShowPatientPage implements OnInit {
  menuOut: string;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.menuOut = ClassGlobalConstants.MENU_OUT_PACIENTE;
  }

}
