import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { Modal } from './modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends Modal {

  constructor(private modalService: ModalDialogService) {
    super();
  }

  show(header: any = '', title: string | ViewContainerRef = '', body: any = null): void {
    if (typeof header === 'function' && typeof title === 'object') {
      this._show(header, title);
    } else {
      alert("Method not implemented yet.");
    }
  }

  hide(): void {
    alert("Method not implemented yet.");
  }

  private _show(component: any, vcRef: ViewContainerRef) {
    const options: ModalDialogOptions = {
      // fullscreen: false,
      viewContainerRef: vcRef
    };
    this.modalService.showModal(component, options);
  }
}
