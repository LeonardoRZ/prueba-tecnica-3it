import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ListIndicadoresComponent } from './pages/list-indicadores/list-indicadores.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleIndicadorComponent } from './pages/detalle-indicador/detalle-indicador.component';

const routes : Routes = [
  {
    path: '', component : HomeComponent,
    children: [
      {
          path: 'indicadores', component : ListIndicadoresComponent
      },
      {
         path: 'indicador/:id', component : IndicadorComponent
      },
      {
         path: 'detalle/:id', component : DetalleIndicadorComponent
      },
      {
        path: '**', redirectTo: 'indicadores'
      }
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
