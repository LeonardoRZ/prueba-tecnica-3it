import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  {
    path: '', loadChildren : () => import('./indicadores/indicadores.module').then( m => m.IndicadoresModule )
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
