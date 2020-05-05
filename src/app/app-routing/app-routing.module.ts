import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AddClientComponent } from '../components/add-client/add-client.component';
import { ClientDetailsComponent } from '../components/client-details/client-details.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { EditClientComponent } from '../components/edit-client/edit-client.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

import { AuthGuard } from '../guards/auth.guard';
import { RegisterGuard } from '../guards/register.guards';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'client/add', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: 'clients', component: ClientsComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, RegisterGuard]
})

export class AppRoutingModule { }