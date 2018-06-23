import { Component, OnInit, Inject } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { Dados } from '../crud/dados';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
    private service: CrudService,
    @Inject(FormBuilder) formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.meuForm = formBuilder.group({
      nome: [Validators.required, Validators.minLength(4)],
      genero: [''],
      cpf: ['']
    });
  }

  ngOnInit() {
    let dadosId = Number(this.route.snapshot.params['id']);
    if (dadosId) {
      this.title = 'Editar Dados';
      this.dados = this.service.getById(dadosId);
    } else {
      this.title = "Inserir Dados";
      this.dados = new Dados();
    }
  }

  salvar() {
    this.service.salvar(this.dados);
    this.router.navigate(['/listar']);
  }
}
