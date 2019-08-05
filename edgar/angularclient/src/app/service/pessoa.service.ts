import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../model/pessoa";
import {Constants} from "../util/constants";

@Injectable()
export class PessoaService {


  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(Constants.PESSOAS_ENDPOINT);
  }

  public buscar(id: string): Observable<Pessoa> {
    var url = Constants.PESSOAS_ENDPOINT + '/' + id;
    return this.http.get<Pessoa>(url);
  }

  public save(pessoa: Pessoa) {
    return this.http.post<Pessoa>(Constants.PESSOAS_ENDPOINT, pessoa);
  }

  public delete(pessoaId: string) {
    const url = `${Constants.PESSOAS_ENDPOINT}/${pessoaId}`;
    this.http.delete(url).subscribe();
  }

  public filtrar(filtro: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${Constants.PESSOAS_FILTRO_ENDPOINT}?filtro=${filtro}`);
  }

}
