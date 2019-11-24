import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';
import { ComponenteRecargasComponent } from './componente-recargas/componente-recargas.component';
import { ComponentDatosComponent } from './component-datos/component-datos.component';
import { ComponentePagoComponent } from './componente-pago/componente-pago.component';
import { ComponenteRespuestaComponent } from './componente-respuesta/componente-respuesta.component';

const routes: Routes = [
  { path: '', component: ComponentePrincipalComponent },
  { path: 'recargas', component: ComponenteRecargasComponent },
  { path: 'datos/:tipo', component: ComponentDatosComponent },
  { path: 'pago', component: ComponentePagoComponent },
  { path: 'respuesta', component: ComponenteRespuestaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
