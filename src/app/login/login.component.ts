import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserAuthenticationModel } from './model/user-authentication/user-authentication.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formLogin : FormGroup;

  

  constructor(
              private authService : AuthService,
              private formBuilder : FormBuilder,
              private toastr : ToastrService,
              private router : Router
             ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formLogin = this.formBuilder.group({
      name : new FormControl('', Validators.compose([Validators.required])),
      password : new FormControl('', Validators.compose([Validators.required]))
    });
  }
  
  private auth() {
    const user : UserAuthenticationModel = new UserAuthenticationModel();

    user.username = this.formLogin.get('name').value;
    user.password = this.formLogin.get('password').value;    

    this.authService.signIn(user).subscribe((result) => {
      this.toastr.success('Logado com sucesso!!!');
      this.router.navigate(['admin']);
    });
  }

  
}
