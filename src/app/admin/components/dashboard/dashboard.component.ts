import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../login/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  protected items;

  protected formSearch = new FormGroup ({

    search : new FormControl(),

  });

  constructor(
    private userService : UserService, 
    private authService : AuthService,
  private router : Router) { }

  public showPeople(sapato) {
    console.log(sapato);
  }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.items = users;
    });
    
  }

  public logout() {
    this.authService.singOut();
    this.router.navigate(['login']);
  }

}
