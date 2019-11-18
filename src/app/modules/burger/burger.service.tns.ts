import { Injectable, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { getRootView } from 'tns-core-modules/application';
import { Burger } from './burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerService extends Burger {

  constructor() {
    super();
  }

  show(): void {
    (<RadSideDrawer>getRootView()).showDrawer();
  }

  hide(): void {
    (<RadSideDrawer>getRootView()).closeDrawer();
  }
}
