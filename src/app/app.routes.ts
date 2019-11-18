import { Routes } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'demo', redirectTo: '/demo/(outletcat:cat//outletdog:dog//outletmouse:mouse)', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'demo', component: DemoComponent, children: [
    { path: 'cat', component: CatComponent, outlet: 'outletcat' },
    { path: 'dog', component: DogComponent, outlet: 'outletdog' },
    { path: 'mouse', component: MouseComponent, outlet: 'outletmouse' },
  ] },
];
