import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  email='admin@gmail.com'
  password='123456789'
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string | any;
  loginSuccess=false;
  loginService: any;
  authenticationService: any;


  constructor( 
    private router:Router  ) { }

  ngOnInit(): void {
  }
  checkAdmin(){

    let admin={
      "email":this.email,
      "password":this.password,
    }
  
    
    this.authenticationService.admin(Customer)
    .subscribe((response : any )=>{
      console.log(Response);
      if(response)
      {
        this.router.navigate(['customers']);
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Admin Successful.';
      }
      
      else{
        this.invalidLogin = true;
      }
      
    });
    this.loginSuccess = false;
  }

}
