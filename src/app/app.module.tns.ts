import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { AppErrorHandler } from '@src/app/handler/error.handler';
import { TestComponent } from '@src/app/components/test/test.component';
import { DemoComponent } from '@src/app/components/demo/demo.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { CatComponent } from '@src/app/components/cat/cat.component';
import { DogComponent } from '@src/app/components/dog/dog.component';
import { MouseComponent } from '@src/app/components/mouse/mouse.component';
import { Modal } from '@src/app/commons/modals/modal';
import { ModalService } from '@src/app/commons/modals/modal.service.tns';
import { TestEntryComponent } from '@src/app/components/test-entry/test-entry.component';
import { SearchEntryComponent } from '@src/app/components/search-entry/search-entry.component';
import { SliderTestComponent } from '@src/app/components/slider-test/slider-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    DemoComponent,
    CatComponent,
    DogComponent,
    MouseComponent,
    TestEntryComponent,
    SearchEntryComponent,
    SliderTestComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
  ],
  entryComponents: [TestEntryComponent, SearchEntryComponent],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: Modal, useClass: ModalService }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
