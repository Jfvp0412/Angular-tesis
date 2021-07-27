import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdoptanteComponent } from './components/crear-cuenta/crear-adoptante/crear-adoptante.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearFundacionComponent } from './components/crear-cuenta/crear-fundacion/crear-fundacion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'crear-cuenta',component: CrearCuentaComponent},
  {path: 'crear-cuenta/crear-adoptante',component: CrearAdoptanteComponent},
  {path: 'crear-cuenta/crear-fundacion',component: CrearFundacionComponent},
  {path: 'dashboard',loadChildren: () => import('./components/dashboard/dashboard.module').then(x =>x.DashboardModule)} //Carga perezosa
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
