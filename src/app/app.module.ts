import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/dash-board/wrapper/wrapper.component';
import { InvoiceFormComponent } from './components/invoice/invoice-form/invoice-form.component';
import { WelcomeComponent } from './components/dash-board/welcome/welcome.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

// Services
import { InvoiceService } from './services/invoice.service';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    InvoiceFormComponent,
    WelcomeComponent,
    InvoiceListComponent,
    ClientListComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
