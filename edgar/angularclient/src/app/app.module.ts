import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./service/user-service.service";
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import {PessoaService} from "./service/pessoa.service";


@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule/*,
            NgbPaginationModule,
            NgbAlertModule*/
  ],
  providers: [UsuarioService, PessoaService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
