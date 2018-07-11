import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/dash-board/navigation-bar/navigation-bar.component';
import { WrapperComponent } from './components/dash-board/wrapper/wrapper.component';
import { InvoiceFormComponent } from './components/dash-board/invoice-form/invoice-form.component';

// Services
import { InvoiceService } from './services/invoice.service';

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
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
