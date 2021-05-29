import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {ClassGlobalConstants} from '../class/class.globalConstants';

@Component({
  selector: 'app-fix-patient',
  templateUrl: './fix-patient.page.html',
  styleUrls: ['./fix-patient.page.scss'],
})
export class FixPatientPage implements OnInit {
  menuOut: string;

  constructor(private auth: AuthenticationService) {
    this.menuOut = ClassGlobalConstants.MENU_OUT_PACIENTE;
  }

  ngOnInit() {
  }

}
