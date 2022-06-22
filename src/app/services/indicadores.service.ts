import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private baseUrl = environment.ApiBaseUrl;
  private apiKey  = environment.APIKey;

  constructor(private http : HttpClient) { }

  //Dólar de días anteriores a un mes y año

  getIndicadoresMensuales(indicador: string, currentYear : string, currentDay : string, currentMonth : string, lastDay: string, lastMonth: string ):Observable<any>{
    return this.http.get( `${this.baseUrl}${indicador}/periodo/${currentYear}/${lastMonth}/dias_i/${lastDay}/${currentYear}/${currentMonth}/dias_f/${currentDay}?apikey=${this.apiKey}&formato=json`)
  }
  getIndicadoresAnuales(indicador: string, currentYear: string ):Observable<any>{
    return this.http.get( `${this.baseUrl}${indicador}/${currentYear}?apikey=${this.apiKey}&formato=json`)
  }
  getIndicadorValorActual(indicador: string):Observable<any>{
    return this.http.get( `${this.baseUrl}${indicador}?apikey=${this.apiKey}&formato=json`)
  }
  getIndicadoresPorDias(indicador: string, currentYear : string, day : string, currentMonth : string):Observable<any>{
    return this.http.get( `${this.baseUrl}${indicador}/posteriores/${currentYear}/${currentMonth}/dias/${day}?apikey=${this.apiKey}&formato=json`)
  }
  getIndicadoresDoceMeses(indicador: string, currentYear : string, currentMonth : string):Observable<any>{
    return this.http.get( `${this.baseUrl}${indicador}/anteriores/${currentYear}/${currentMonth}?apikey=${this.apiKey}&formato=json`)
  }

}