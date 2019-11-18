import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { TestEntryComponent } from '../test-entry/test-entry.component';
import { SearchEntryComponent } from '../search-entry/search-entry.component';
import { Modal } from '@src/app/modules/modal/modal';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(
    private modal: Modal,
    private vcRef: ViewContainerRef,
    private location: Location
  ) { }

  ngOnInit() {
  }

  openModal(): void {
    this.modal.show(TestEntryComponent, this.vcRef);
  }

  openModalSearch(): void {
    this.modal.show(SearchEntryComponent, this.vcRef);
  }

  onGoBackDemo() {
    this.location.back();
  }
}
