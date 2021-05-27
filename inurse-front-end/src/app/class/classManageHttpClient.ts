import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {throwError} from 'rxjs';

import {Router} from '@angular/router';

export class ClassManageHttpClient  {

  constructor() {  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }




}
