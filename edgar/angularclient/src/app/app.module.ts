import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./service/user-service.service";
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import {PessoaService} from "./service/pessoa.service";
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import {IConfig, NgxMaskModule} from "ngx-mask";

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(options)/*,
            NgbPaginationModule,
            NgbAlertModule*/
  ],
  providers: [UsuarioService, PessoaService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
