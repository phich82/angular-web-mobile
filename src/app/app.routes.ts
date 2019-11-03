import { Routes } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DemoComponent } from './components/demo/demo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'demo', component: DemoComponent }
];
