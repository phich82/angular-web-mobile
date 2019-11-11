import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { getRootView } from 'tns-core-modules/application';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Web & Mobile Framework Based Angular';

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  onGoDemo() {
    this.router.navigate(['/demo']);
  }

  onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
  }
}
