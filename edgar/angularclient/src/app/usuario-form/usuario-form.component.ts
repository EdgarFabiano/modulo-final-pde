import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Usuario} from "../model/usuario";
import {UsuarioService} from "../service/user-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  usuario: Usuario;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.usuarioService.save(this.usuario).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/desafio/pessoas']);
  }

}
