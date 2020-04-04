import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerBoostCalculatorComponent } from './PowerBoostCalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerBoostCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ],
  exports: [AppComponent, PowerBoostCalculatorComponent ]
})
export class AppModule { } // Root Module, the NgModule
