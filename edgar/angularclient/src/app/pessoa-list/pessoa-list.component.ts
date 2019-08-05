import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../service/pessoa.service";
import {Pessoa} from "../model/pessoa";
import {Router} from "@angular/router";
import {Constants} from "../util/constants";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[];
  page: number;
  pageSize: number;
  length: number;
  searchText: string;

  constructor(private pessoaService: PessoaService, private router: Router, private authService: AuthService) {
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit() {
    this.pessoaService.findAll().subscribe(data => {
      this.pessoas = data;
      this.length = 100
    });
  }

  editar(id: string) {
    this.router.navigate(['/' + Constants.FORM_PESSOA + '/' + id]);
  }

  excluir(id: string) {
    this.pessoaService.delete(id);
    // location.reload();
  }

  filtrar() {
    this.pessoaService.filtrar(this.searchText).toPromise().then(pessoas => this.pessoas = pessoas)
  }
}
