import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { ListIndicadoresComponent } from './pages/list-indicadores/list-indicadores.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HomeComponent } from './pages/home/home.component';

//Modulos
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    IndicadorComponent,
    ListIndicadoresComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class IndicadoresModule { }
