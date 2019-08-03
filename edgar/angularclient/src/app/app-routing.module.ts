import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";
import {PessoaFormComponent} from "./pessoa-form/pessoa-form.component";

const routes: Routes = [
  { path: 'desafio/pessoas', component: PessoaListComponent },
  { path: 'desafio/pessoa', component: PessoaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
