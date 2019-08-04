import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {Constants} from "../util/constants";
import {Usuario} from "../model/usuario";
import {Perfil} from "../model/perfil";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Usuario = { id: "1", login: "admin", senha: "admin123", perfil: Perfil.ADMINISTRADOR };
  loginForm: FormGroup;
  message: string;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else{
      if(this.f.login.value == this.model.login && this.f.senha.value == this.model.senha){
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.login.value);
        this.router.navigate(['/' + Constants.LISTAGEM_PESSOAS]);
      }
      else{
        this.message = "Usuário e senha não encontrados";
      }
    }
  }

}
