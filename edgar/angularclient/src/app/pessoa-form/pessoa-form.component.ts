import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../model/pessoa";
import {ActivatedRoute, Router} from "@angular/router";
import {PessoaService} from "../service/pessoa.service";
import {Constants} from "../util/constants";

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit{

  pessoa: Pessoa;

  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService) {
    this.pessoa = new Pessoa();
  }

  onSubmit() {
    this.pessoa.nascimento = this.formatData(this.pessoa.nascimento);
    this.pessoaService.save(this.pessoa).subscribe(result => this.gotoUserList());
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pessoaService.buscar(params.get('id')).toPromise().then(pessoa => this.pessoa = this.adjust(pessoa));
    });
  }

  gotoUserList() {
    this.router.navigate(['/' + Constants.LISTAGEM_PESSOAS]);
  }

  formatData(s: string): string {
    let year = s.charAt(4) + s.charAt(5) + s.charAt(6) + s.charAt(7);
    let month = s.charAt(2) + s.charAt(3);
    let day = s.charAt(0) + s.charAt(1);

    return year + "-" + month + "-" + day + "T02:00:00.001+0000";
  }

  adjust(pessoa: Pessoa): Pessoa {
    pessoa.nascimento = this.reverseFormatData(pessoa.nascimento);
    return pessoa;
  }

  reverseFormatData(s: string) {
    let year =  s.charAt(0) + s.charAt(1) + s.charAt(2) + s.charAt(3);
    let month = s.charAt(5) + s.charAt(6);
    let day = s.charAt(8) + s.charAt(9);
    return day + '/' + month + '/' + year;
  }

}
