import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicadoresService } from '../../../services/indicadores.service';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.css']
})
export class DetalleIndicadorComponent implements OnInit {

  indicador        = '';
  detalleIndicador = [];
  titulo           = '';
  valueInput       = '';
  
  constructor(private route : ActivatedRoute, private service : IndicadoresService) { }

  ngOnInit(): void {
    this.indicador = <string>this.route.snapshot.paramMap.get('id')?.toLowerCase();
    if (this.indicador === 'dolar' || this.indicador === 'euro' || this.indicador === 'uf' || this.indicador === 'ipc' || this.indicador === 'utm') {
      this.valueInput = this.indicador;
      this.titulo = this.indicador.toUpperCase();
      this.obtenerIndicadorValorActual(this.indicador);
    }else{
      this.titulo = 'No se encontraron detalles para este indicador';
    }
  }

  obtenerIndicadorValorActual(indicador: string){
    this.service.getIndicadorValorActual(indicador).subscribe(res =>{
      this.detalleIndicador = Object.values(res)
    })
  }

 


}
