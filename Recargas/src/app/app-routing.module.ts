import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';


const routes: Routes = [
  { path: '', component: ComponentePrincipalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
