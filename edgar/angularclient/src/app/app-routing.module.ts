import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuarioFormComponent} from "./usuario-form/usuario-form.component";
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";

const routes: Routes = [
  { path: 'desafio/pessoas', component: PessoaListComponent },
  { path: 'desafio/pessoa', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
