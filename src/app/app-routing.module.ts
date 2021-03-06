import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WelcomeComponent } from './components/dash-board/welcome/welcome.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { AddEditClientComponent } from './components/clients/add-edit-client/add-edit-client.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { InvoiceFormComponent } from './components/invoice/invoice-form/invoice-form.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'add-edit-invoice', component: InvoiceFormComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/:clientId', component: ClientDetailComponent },
  { path: 'add-edit-client', component: AddEditClientComponent },
  { path: 'add-edit-client/:id', component: AddEditClientComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
