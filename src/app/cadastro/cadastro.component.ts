import { Component, OnInit, Inject } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { Dados } from '../crud/dados';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  title = "Inserir Dados";
  dados: any = {};
  meuForm: FormGroup;
  
  constructor(
    private service: CrudService;
    @Inject(FormBuilder) formBuilder: FormBuilder;
    private router: Router
  ) {
    this.meuForm = formBuilder.group({
      nome: [],
      genero: [],
      cpf: []
    });
  }

  ngOnInit() {
    this.dados = new Dados();
  }

  salvar() {
    this.service.salvar(this.dados);
    this.router.navigate(['/listar']);
  }
}
