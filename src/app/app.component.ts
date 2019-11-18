import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Burger } from './modules/burger/burger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  preventAbuse = false;

  constructor(
    private router: Router,
    private burger: Burger,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onGoTest(): void {
    this.router.navigate(["/test"]);
    this.burger.hide();
  }

  openModalTest(): void {
    this.router.navigate(["/test"]);
    this.burger.hide();
  }

  openModalSearch(): void {
    this.router.navigate(["/test"]);
    this.burger.hide();
  }
  testHttp() {
    console.log('---testing---');
    this.preventAbuse = true;
    this.http.get('https://reqres.in/api/users?delay=2').subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
    });
  }
}
