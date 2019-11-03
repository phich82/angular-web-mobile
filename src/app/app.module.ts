import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppErrorHandler } from './handler';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { TestComponent } from '@src/app/components/test/test.component';
import { DemoComponent } from '@src/app/components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
