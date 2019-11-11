import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppErrorHandler } from '@src/app/handler';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { TestComponent } from '@src/app/components/test/test.component';
import { DemoComponent } from '@src/app/components/demo/demo.component';
import { CatComponent } from '@src/app/components/cat/cat.component';
import { DogComponent } from '@src/app/components/dog/dog.component';
import { MouseComponent } from '@src/app/components/mouse/mouse.component';
import { Modal } from '@src/app/commons/modals/modal';
import { ModalService } from '@src/app/commons/modals/modal.service';
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
    BrowserModule,
    AppRoutingModule,
  ],
  entryComponents: [TestEntryComponent, SearchEntryComponent],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: Modal, useClass: ModalService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
