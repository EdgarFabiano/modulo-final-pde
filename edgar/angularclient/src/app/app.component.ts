import { Component } from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Constants} from "./util/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  public authenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authenticated = authService.isAuthenticated();
    this.title = 'Programa de estágio - Mirante Tecnologia';
    Constants.APP_COMPONENT = this;

    if (this.authenticated) {
      this.gotoUserList();
    } else {
      this.gotoLogin();
    }
  }

  gotoUserList() {
    this.router.navigate(['/' + Constants.LISTAGEM_PESSOAS]);
  }

  gotoLogin() {
    this.router.navigate(['/' + Constants.LOGIN]);
  }

}
