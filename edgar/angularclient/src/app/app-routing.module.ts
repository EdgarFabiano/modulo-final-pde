import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioListComponent} from "./usuario-list/usuario-list.component";
import {UsuarioFormComponent} from "./usuario-form/usuario-form.component";

const routes: Routes = [
  { path: 'users', component: UsuarioListComponent },
  { path: 'adduser', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
