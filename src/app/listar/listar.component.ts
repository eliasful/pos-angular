import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  dados: any = [];
  
  constructor(
    private service: CrudService;
  ) { }

  ngOnInit() {
    this.dados = this.service.getDados();
  }

}
