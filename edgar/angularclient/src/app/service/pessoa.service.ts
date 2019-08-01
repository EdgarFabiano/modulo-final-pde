import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../model/pessoa";

@Injectable()
export class PessoaService {

  private pessoasUrl: string;

  constructor(private http: HttpClient) {
    this.pessoasUrl = 'http://localhost:4200/pessoas';
  }

  public findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.pessoasUrl);
  }

  public save(pessoa: Pessoa) {
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa);
  }

  public delete(pessoaId: string) {
    const url = `${this.pessoasUrl}/${pessoaId}`;
    this.http.delete(url).subscribe();
  }

}
