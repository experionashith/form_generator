/*import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'fb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  user={
  username:'',
  password:''
  
}
 onSubmit(form:NgForm){
   console.log(this.user);
this.router.navigate(['/main']);
 }

  ngOnInit() {
  }

}*/


import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ControlConfigurationComponent } from '../control-configuration/control-configuration.component';

@Component({
  selector: 'fb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  user = {
    username: "",
    password: ""
  };
  ngOnInit() { }


  onSubmit(form: NgForm) {
    var status = false;
    console.log(this.user);
    var response = this.loginService.Login(this.user).subscribe(
      (data) => {
        if (data.Validity == true) {
          this.router.navigate(['/main']);

          alert("Login Successful");
        }
        if (data.Validity == false) {
          alert("Wrong password/username");
        }


      });

  }

}