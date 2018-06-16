import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { PrincipalComponent } from './principal/principal.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AngularComponent } from './angular/angular.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';

import { CrudService } from './crud/crud.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: ListaCursosComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listar', component: ListarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    PrincipalComponent,
    CardComponent,
    FooterComponent,
    AngularComponent,
    ListaCursosComponent,
    CadastroComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
