import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}
  showErrorAlert(text) {
    Swal.fire({
      text: text,
      icon: 'error',
    });
  }
}
