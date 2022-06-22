import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-indicadores',
  templateUrl: './list-indicadores.component.html',
  styleUrls: ['./list-indicadores.component.css']
})
export class ListIndicadoresComponent implements OnInit {

  indicadores = [
    {
      name: 'Dolar'
    },
    {
      name: 'Euro'
    },
    {
      name: 'IPC'
    },
    {
      name: 'UF'
    },
    {
      name: 'UTM'
    }
  ];

  constructor() {}

  ngOnInit(): void {}





}
