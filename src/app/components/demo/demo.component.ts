import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { Modal } from '@src/app/commons/modals/modal';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoSelectedIndex = 0;

  constructor(
    private location: Location,
    private modal: Modal
  ) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }

  openModal() {
    this.modal.show('Test Header', 'Test Title', {});
  }

  closeModal() {
    this.modal.hide();
  }

  onSelectedIndexChanged(event: SelectedIndexChangedEventData) {
    console.log('Old index => ' + event.oldIndex + ' | New index => ' + event.newIndex);
    alert('Old index => ' + event.oldIndex + ' | New index => ' + event.newIndex);
  }
}
