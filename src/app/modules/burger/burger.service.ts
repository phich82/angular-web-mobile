import { Injectable } from '@angular/core';
import { Burger } from './burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerService extends Burger {

  constructor() {
    super();
  }

  show(): void {
    alert("Method not implemented.");
  }

  hide(): void {
    alert("Method not implemented.");
  }
}
