import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { HeaderComponent } from './header/header.component';
import { CuadroComponent } from './cuadro/cuadro.component';

@NgModule({
  declarations: [
    AppComponent,
    AsistenciaComponent,
    HeaderComponent,
    CuadroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
