import { Component, OnInit } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';

@Component({
  selector: 'app-search-entry',
  templateUrl: './search-entry.component.html',
  styleUrls: ['./search-entry.component.css']
})
export class SearchEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeModal(scrollView: View): void {
    scrollView.closeModal();
  }
}
