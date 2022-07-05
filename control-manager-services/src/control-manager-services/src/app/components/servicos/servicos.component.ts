import { ServicosService } from './servicos.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from './servico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  preserveWhitespaces: true
})
export class ServicosComponent implements OnInit {

 // servicos!: Servico[];

  // deleteModalRef: BsModalRef;
  // @ViewChild('deleteModal', { static: true }) deleteModal;

  servicos$!: Observable<Servico[]>;
  tipos!: string[];

  constructor(private service: ServicosService) {
    this.tipos = this.service.getTiposServicos();
   }

  ngOnInit() {
    
  //  this.service.list().subscribe(dados => this.servicos = dados);
    this.servicos$ = this.service.list();
  }

}
