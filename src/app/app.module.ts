import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaceModule } from './modules/pace/pace.module';

import { AppErrorHandler } from '@src/app/handler';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { Modal } from './modules/modal/modal';
import { ModalService } from './modules/modal/modal.service';
import { Burger } from './modules/burger/burger';
import { BurgerService } from './modules/burger/burger.service';

import { HomeComponent } from '@src/app/home/home.component';
import { TestComponent } from '@src/app/components/test/test.component';
import { DemoComponent } from '@src/app/components/demo/demo.component';
import { CatComponent } from '@src/app/components/cat/cat.component';
import { DogComponent } from '@src/app/components/dog/dog.component';
import { MouseComponent } from '@src/app/components/mouse/mouse.component';

import { TestEntryComponent } from '@src/app/components/test-entry/test-entry.component';
import { SearchEntryComponent } from '@src/app/components/search-entry/search-entry.component';
import { SliderTestComponent } from '@src/app/components/slider-test/slider-test.component';

import { LayoutComponent } from '@src/app/components/layout/layout.component';


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
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PaceModule,
    AppRoutingModule,
  ],
  entryComponents: [TestEntryComponent, SearchEntryComponent],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: Modal, useClass: ModalService },
    { provide: Burger, useClass: BurgerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
