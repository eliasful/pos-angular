import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    @Inject(FormBuilder) formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.meuForm = formBuilder.group({
      email:['',
      [Validators.required,
        Validators.email]]
      senha: ['']
    });
  }

  ngOnInit() {
  }

  login() {
    $("#login").modal('hide');
  }
}
