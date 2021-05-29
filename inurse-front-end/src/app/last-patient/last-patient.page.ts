import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {ClassGlobalConstants} from '../class/class.globalConstants';

@Component({
  selector: 'app-last-patient',
  templateUrl: './last-patient.page.html',
  styleUrls: ['./last-patient.page.scss'],
})
export class LastPatientPage implements OnInit {
  private menuOut: string;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.menuOut = ClassGlobalConstants.MENU_OUT_PACIENTE;
  }

}
