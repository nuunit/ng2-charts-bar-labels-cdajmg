// import 'zone.js/dist/zone-mix';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';

import * as ChartDataLabels from 'chartjs-plugin-datalabels';

//import * as Chart from 'chart.js';


@NgModule({
  declarations: [
    AppComponent, HelloComponent
  ],
  imports: [

    ChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   Chart.plugins.unregister(ChartDataLabels);
  }
}
