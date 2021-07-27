import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material

//Componentes
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearAdoptanteComponent } from './components/crear-cuenta/crear-adoptante/crear-adoptante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearCuentaComponent,
    CrearAdoptanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
