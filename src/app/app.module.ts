import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StatesdataComponent } from './components/statesdata/statesdata.component'
import { ChartsModule } from 'ng2-charts';
import { RadiobuttonsComponent } from './components/radiobuttons/radiobuttons.component';
import { HomechartComponent } from './components/homechart/homechart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatechartComponent } from './components/statechart/statechart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatesdataComponent,
    RadiobuttonsComponent,
    HomechartComponent,
    StatechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
