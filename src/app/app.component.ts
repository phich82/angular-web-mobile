import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(RadSideDrawerComponent, { static: true }) sideDrawerComponent: RadSideDrawerComponent;

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  onGoTest(): void {
    this.router.navigate(["/test"]);
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  openModalTest(): void {
    this.router.navigate(["/test"]);
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  openModalSearch(): void {
    this.router.navigate(["/test"]);
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }
}
