import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import {UsuarioService} from "../service/user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];
  page: number;
  pageSize: number;
  length: number;

  constructor(private userService: UsuarioService) {
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.usuarios = data;
      this.length = 100
    });
  }
}
