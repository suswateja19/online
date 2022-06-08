import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {


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
  }
}
