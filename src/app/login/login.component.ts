import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  customers: Observable<Customer[]> | any;

  email=''
  password=''
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string | any;
  loginSuccess=false;

  constructor(
    private router: Router,
    private loginService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }
  checkLogin() {
    let customer={
      "email":this.email,
      "password":this.password,
    }
    this.loginService.login(customer)
    .subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['cdetails',this.email]);
       // this.router.navigate(['register']);
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        
        //this.errrMessage = 'Error';
      }
      else{
        this.invalidLogin = true;
      }
    });
 
    this.loginSuccess = false;
  }

  
  CustomerDetails(email:string){
    this.router.navigate(['cdetails/:email']);
  }

 
}
/*
  transactions: Observable<Transaction[]> | any;


  constructor(
    private transactionService: TransactionService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData(){

    this.transactions=this.transactionService.getTransactionList();
  }

  TransactionDetails(id:number){
    this.router.navigate(['details',id]);
  }*/
