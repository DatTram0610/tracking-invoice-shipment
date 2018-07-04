import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/dash-board/navigation-bar/navigation-bar.component';
import { WrapperComponent } from './components/dash-board/wrapper/wrapper.component';
import { InvoiceFormComponent } from './components/dash-board/invoice-form/invoice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WrapperComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
