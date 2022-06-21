import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { ListIndicadoresComponent } from './pages/list-indicadores/list-indicadores.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    IndicadorComponent,
    ListIndicadoresComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ]
})
export class IndicadoresModule { }
