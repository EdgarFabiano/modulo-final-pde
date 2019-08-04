import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";
import {PessoaFormComponent} from "./pessoa-form/pessoa-form.component";
import {LoginComponent} from "./login/login.component";
import {Constants} from "./util/constants";

const routes: Routes = [
  { path: Constants.LISTAGEM_PESSOAS, component: PessoaListComponent },
  { path: Constants.FORM_PESSOA, component: PessoaFormComponent },
  { path: Constants.LOGIN, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
