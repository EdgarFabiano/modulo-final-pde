import {Usuario} from "./usuario";
import {DatePipe} from "@angular/common";

export class Pessoa {

  id: string;
  usuario: Usuario;
  nome: string;
  cpf: string;
  nascimento: string;
  curriculo: string;

}
