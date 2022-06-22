import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import * as moment from 'moment';
import { IndicadoresService } from '../../../../services/indicadores.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  @Input() indicador : string = '';
  currentDay   = '';
  currentMonth = '';
  currentYear  = '';
  lastDay      = '';
  lastMonth    = '';
  indicadores  : any[] = [];
  dataSet      : any[] = [];
  dataLabels   : any[] = [];
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'line';

  public barChartData: any = {};
  
  constructor(private service : IndicadoresService) { }
  
  ngOnInit(): void {
    this.currentYear  = moment().format('YYYY')
    this.currentDay   = moment().format('DD')
    this.currentMonth = moment().format('MM')
    this.lastDay      = moment().subtract(10, 'days').format('DD')
    this.lastMonth    = moment().subtract(12, 'months').format('MM')
    if (this.indicador === 'dolar' || this.indicador === 'euro' || this.indicador === 'uf' ) {
      this.obtenerValorPorDias(this.indicador, this.currentYear, this.lastDay, this.currentMonth)
    }else{
      this.obtenerValoresDoceMeses(this.indicador, this.currentYear, this.currentMonth);
    }
  }
  obtenerValorPorDias(indicador: string, currentYear : string, day : string, currentMonth : string){
    this.service.getIndicadoresPorDias(indicador,currentYear,day,currentMonth).subscribe(res =>{
      const arr : any[]= Object.values(res)
      const array = arr[0];
      this.indicadores = array;
      array.forEach( (x:any) => {
        this.dataLabels.push(x.Fecha);
        this.dataSet.push( parseInt(x.Valor, 10) );
      })
      this.barChartData = {
        labels: this.dataLabels,
        datasets: [
          { data: this.dataSet , label: 'Valor' },
        ]
      };
    })
  }
  obtenerValoresDoceMeses(indicador : string, currentYear : string, currentMonth : string){
    this.service.getIndicadoresDoceMeses(indicador,currentYear,currentMonth).subscribe(res => {
      const arr : any[]= Object.values(res)
      const array = arr[0];
      this.indicadores = array;
      array.forEach( (x:any) => {
        this.dataLabels.push(x.Fecha);
        this.dataSet.push( parseInt(x.Valor, 10) );
      })
      this.barChartData = {
        labels: this.dataLabels,
        datasets: [
          { data: this.dataSet , label: 'Valor' },
        ]
      };
    })
  }


}
