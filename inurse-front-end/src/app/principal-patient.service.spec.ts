import { TestBed } from '@angular/core/testing';

import { PrincipalPatientService } from './principal-patient.service';

describe('PrincipalPatientService', () => {
  let service: PrincipalPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
