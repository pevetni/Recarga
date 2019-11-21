import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';

/** Material Componentes */

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ComponenteRecargasComponent } from './componente-recargas/componente-recargas.component';
import {MatButtonModule} from '@angular/material/button';
import { ComponentDatosComponent } from './component-datos/component-datos.component';
import { ComponentePagoComponent } from './componente-pago/componente-pago.component';
import { ComponenteRespuestaComponent } from './componente-respuesta/componente-respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePrincipalComponent,
    ComponenteRecargasComponent,
    ComponentDatosComponent,
    ComponentePagoComponent,
    ComponenteRespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
