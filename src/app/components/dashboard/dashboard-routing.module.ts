import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearAnimalComponent } from './usuarios/crear-animal/crear-animal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:  [
    {path: '',component: InicioComponent},
    {path: 'animales',component: UsuariosComponent},
    {path: 'reportes',component: ReportesComponent},
    {path: 'crear-animal',component: CrearAnimalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
