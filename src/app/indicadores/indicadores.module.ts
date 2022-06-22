import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { ListIndicadoresComponent } from './pages/list-indicadores/list-indicadores.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { GraficasComponent } from './pages/components/graficas/graficas.component';

//Modulos
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { DetalleIndicadorComponent } from './pages/detalle-indicador/detalle-indicador.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IndicadorComponent,
    ListIndicadoresComponent,
    HomeComponent,
    DetalleIndicadorComponent,
    GraficasComponent,
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class IndicadoresModule { }
