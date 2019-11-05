import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalcolatriceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
