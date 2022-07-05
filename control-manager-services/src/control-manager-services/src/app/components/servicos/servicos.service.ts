import { environment } from './../../../environments/environment';
import { Servico } from './servico';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

   
  private readonly API = `${environment.API}servicos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Servico[]>(this.API)
    .pipe(
      // delay(2000),
      tap(console.log));
  }

  getTiposServicos(){
    return ['Emergenciais','Comerciais','Hora Extra'];
  }
}
