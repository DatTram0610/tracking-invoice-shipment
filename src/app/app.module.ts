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
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { AddEditClientComponent } from './components/clients/add-edit-client/add-edit-client.component';

// Services
import { InvoiceService } from './services/invoice.service';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    InvoiceFormComponent,
    WelcomeComponent,
    InvoiceListComponent,
    ClientListComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    SidenavListComponent,
    ClientDetailComponent,
    AddEditClientComponent
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
  providers: [InvoiceService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
