import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';
import { ComponenteRecargasComponent } from './componente-recargas/componente-recargas.component';


const routes: Routes = [
  { path: '', component: ComponentePrincipalComponent },
  { path: 'recargas', component: ComponenteRecargasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
