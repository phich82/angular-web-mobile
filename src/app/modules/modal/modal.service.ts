import { Injectable } from '@angular/core';
import { Modal } from './modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends Modal {

  constructor() {
    super();
  }

  show(header: string = '', title: string = '', body: any = null): void {
    alert("Method not implemented.");
  }

  hide(): void {
    alert("Method not implemented.");
  }
}
