import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ListIndicadoresComponent } from './pages/list-indicadores/list-indicadores.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { HomeComponent } from './pages/home/home.component';

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
        path: '**', redirectTo: ''
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
