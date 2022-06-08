import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customers: Observable<Customer[]> | any;

  balance = 0;
  amount:string | any;

  constructor() { }

  ngOnInit(): void {
  }

  deposit(){
    this.balance=this.balance+this.amount;
  }

  withdraw(){
    this.balance=this.balance-this.amount;
  }
  showbalance(){
    return this.balance;
  }


}
