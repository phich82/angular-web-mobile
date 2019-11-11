import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { TestEntryComponent } from '../test-entry/test-entry.component';
import { SearchEntryComponent } from '../search-entry/search-entry.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef,
    private location: Location
  ) { }

  ngOnInit() {
  }

  openModal(): void {
    const options: ModalDialogOptions = {
      // fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modalService.showModal(TestEntryComponent, options);
  }

  openModalSearch(): void {
    const options: ModalDialogOptions = {
      // fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modalService.showModal(SearchEntryComponent, options);
  }

  onGoBackDemo() {
    this.location.back();
  }
}
