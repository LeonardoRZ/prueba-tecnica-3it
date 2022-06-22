import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicadoresService } from '../../../services/indicadores.service';
import * as moment from 'moment';

@Component({

  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent implements OnInit {

  currentDay   = '';
  currentMonth = '';
  currentYear  = '';
  lastDay      = '';
  lastMonth    = '';
  indicadores  = [];
  indicador    = '';
  titulo       = '';
  showTable    = false
  
  constructor( private route : ActivatedRoute, private service : IndicadoresService) {}

  ngOnInit(): void {
    this.indicador    = <string>this.route.snapshot.paramMap.get('id')?.toLowerCase();
    this.titulo       = this.indicador.toUpperCase();
    this.currentYear  = moment().format('YYYY')
    this.currentDay   = moment().format('DD')
    this.currentMonth = moment().format('MM')
    this.lastDay      = moment().subtract(30, 'days').format('DD')
    this.lastMonth    = moment().subtract(1, 'months').format('MM')

    if (this.indicador === 'dolar' || this.indicador === 'euro' || this.indicador === 'uf' || this.indicador === 'ipc' || this.indicador === 'utm') {
      this.obtenerData(this.indicador)  
      this.showTable = true;
    }else{
      this.titulo = 'No se encontraron registros para este indicador';
      this.showTable = false;
    }
  
  }

  obtenerData(indicador:string){
    if (indicador === 'dolar' || indicador === 'euro' || indicador === 'uf') {
      this.obtenerIndicadoresMensuales(indicador, this.currentYear, this.currentDay, this.currentMonth, this.lastDay, this.lastMonth);
    }else{
      this.obtenerIndicadoresAnuales(indicador, this.currentYear);
    }
  }
  obtenerIndicadoresMensuales(indicador : string, currentYear : string, currentDay : string, currentMonth : string, lastDay: string, lastMonth: string ){
    this.service.getIndicadoresMensuales(indicador, currentYear, currentDay, currentMonth, lastDay, lastMonth).subscribe(data =>{
      this.indicadores = Object.values(data);
    })
  }
  obtenerIndicadoresAnuales(indicador : string, currentYear: string ){
    this.service.getIndicadoresAnuales(indicador, currentYear).subscribe( data =>{
      this.indicadores = Object.values(data) ;
    })
  }
 

}
