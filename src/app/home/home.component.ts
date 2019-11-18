import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Burger } from '../modules/burger/burger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  title = 'Web & Mobile Framework Based Angular';

  constructor(
    private router: Router,
    private burger: Burger
  ) { }

  ngOnInit() {
  }

  onGoDemo() {
    this.router.navigate(['/demo']);
  }

  onGoLayout() {
    this.router.navigate(['/layout']);
  }

  onShowBurger() {
    this.burger.show();
  }
}
