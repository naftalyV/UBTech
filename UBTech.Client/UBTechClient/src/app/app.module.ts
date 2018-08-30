import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UBTechComponent } from './ubtech.component/ubtech.component';

@NgModule({
  declarations: [
    AppComponent,
    UBTechComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
